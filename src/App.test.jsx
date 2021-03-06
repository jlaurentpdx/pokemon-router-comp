import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as mock from './utils/mockData';

import App from './App';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokedex', (req, res, ctx) => {
    return res(ctx.json(mock.pokedexes));
  }),
  rest.get('https://pokeapi.co/api/v2/region', (req, res, ctx) => {
    return res(ctx.json(mock.regions));
  }),
  rest.get('https://pokeapi.co/api/v2/pokedex/galar', (req, res, ctx) => {
    return res(ctx.json(mock.pokemonInRegion));
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/sobble', (req, res, ctx) => {
    return res(ctx.json(mock.sobble));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('user can view a list of regions, pokemon, and a pokemons details simultaneously; then, can navigate to the home page', async () => {
  render(<App />);

  // App should display a default layout
  const homeHeader = screen.getByRole('heading', { name: /getting started/i });
  const headings = screen.getAllByRole('heading');
  const list = await screen.findByRole('list', /regions/i);

  expect(homeHeader).toBeInTheDocument();
  expect(headings).toHaveLength(4);
  expect(list.children).toHaveLength(8);

  // Behavioral testing - user clicks through possible Pokemon
  const region = await screen.findByRole('link', { name: /gen 8 \| galar/i });
  userEvent.click(region);

  const pokemon = await screen.findByRole('link', { name: /sobble/i });
  userEvent.click(pokemon);

  const name = await screen.findByRole('heading', { name: /sobble/i });

  expect(region).toBeInTheDocument();
  expect(pokemon).toBeInTheDocument();
  expect(name).toBeInTheDocument();

  // Final navigation check - user can route back to the home page
  const home = screen.getByRole('link', { name: /home/i });
  userEvent.click(home);

  const homeHeading = screen.getByRole('heading', { name: /getting started/i });

  expect(homeHeading).toBeInTheDocument();
});
