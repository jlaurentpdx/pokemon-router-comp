import { MemoryRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { sobble } from '../../utils/mockData';
import PokeDetail from './PokeDetail';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/sobble', (req, res, ctx) => {
    return res(ctx.json(sobble));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test('should display a pokemon by following route params', async () => {
  render(
    <Router initialEntries={['/galar/sobble']}>
      <Route path="/:region/:name">
        <PokeDetail />
      </Route>
    </Router>
  );

  const pokemon = await screen.findByRole('heading', { name: /sobble/i });
  const sprites = screen.getAllByAltText(/sprite/i);
  expect(pokemon).toBeInTheDocument();
  expect(sprites).toHaveLength(2);
});
