import { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList/PokemonList';
import fetchPokemon from './services/pokemon';

import styles from './App.css';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonList = await fetchPokemon();
      setPokemon(pokemonList);
      setLoading(false);
    };
    fetchPokemonList();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1 onClick={fetchPokemon}>Click for Pokémon</h1>
      <PokemonList {...{ pokemon }} />
    </div>
  );
}
