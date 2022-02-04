import { MemoryRouter as Router, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

test('should display a pokemon by following route params', () => {
  render(
    <Router initialEntries={['/kanto/squirtle']}>
      <Route path="/:">
        <PokemonDetail />
      </Route>
    </Router>
  );
});
