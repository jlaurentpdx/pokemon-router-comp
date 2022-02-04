import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import * as mock from '../../utils/mockData';

import Regions from './Regions';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokedex', (req, res, ctx) => {
    return res(ctx.json(mock.pokedexes));
  }),
  rest.get('https://pokeapi.co/api/v2/region', (req, res, ctx) => {
    return res(ctx.json(mock.regions));
  })
);

test('Regions displays a list of 8 regions', async () => {
  render(
    <Router>
      <Regions />
    </Router>
  );
  const list = await screen.findByRole('list', /regions/i);
  const kanto = screen.getByRole('link', { name: /kanto/i });

  expect(list.children).toHaveLength(8);
  expect(kanto).toBeInTheDocument();
});
