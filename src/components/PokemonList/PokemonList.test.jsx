import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PokemonList from './PokemonList';

const pokemon = [
  {
    entry_number: 1,
    pokemon_species: {
      name: 'clefairy',
    },
  },
  {
    entry_number: 2,
    pokemon_species: {
      name: 'clefable',
    },
  },
];

test('displays a list of pokemon', () => {
  render(
    <MemoryRouter initialEntries={['/kanto']}>
      <Route path="/:region">
        <PokemonList pokemon={pokemon} />
      </Route>
    </MemoryRouter>
  );

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(2);
});
