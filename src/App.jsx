import { useState, useEffect } from 'react';

import PokemonList from './components/PokemonList/PokemonList';
import { fetchPokedexByGen, fetchPokedexList } from './services/pokemon';

// import styles from './App.css';

function Controls({ generation, setGeneration, pokedexes }) {
  return (
    <select onChange={(e) => setGeneration(e.target.value)} value={generation}>
      {pokedexes
        ? pokedexes.map((region) => (
            <option key={region.name} value={region.name}>
              {region.name}
            </option>
          ))
        : null}
    </select>
  );
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokedexes, setPokedexes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generation, setGeneration] = useState('2');

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokedexByGen(generation);
      const pokedexList = await fetchPokedexList();
      setPokemon(pokemonList);
      setPokedexes(pokedexList);
      setLoading(false);
      console.log('pokemon', pokemonList);
    };
    getPokemon();
  }, [generation]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Pokémon</h1>
      <Controls {...{ pokedexes }} />
      <PokemonList {...{ pokemon }} />
    </div>
  );
}
