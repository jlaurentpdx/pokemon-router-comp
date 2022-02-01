import fetchPokemon from './services/pokemon';

export default function App() {
  return <h1 onClick={fetchPokemon}>Click for Pokémon</h1>;
}
