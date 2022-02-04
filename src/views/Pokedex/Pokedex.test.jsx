import { getByRole, render, screen } from '@testing-library/react';
import { MemoryRouter as Router, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as mock from '../../utils/mockData';

import Pokedex from './Pokedex';

// const server = setupServer(
//   rest.get('https://pokeapi.co/api/v2/pokedex/galar', (req, res, ctx) => {
//     console.log('mocking pokemonInRegion');
//     return res(ctx.json(mock.pokemonInRegion));
//   })
// );

// beforeAll(() => server.listen());
// afterAll(() => server.close());

test('should render a list of Pokemon in the selected region', async () => {
  render(
    <Router initialEntries={['/kanto']}>
      <Route path="/:region">
        <Pokedex />
      </Route>
    </Router>
  );

  const pokeList = await screen.findByRole('list');
  const region = screen.getByRole('heading', { name: /kanto/i });
  expect(pokeList.children).toHaveLength(151);
  expect(region).toBeInTheDocument();
});
