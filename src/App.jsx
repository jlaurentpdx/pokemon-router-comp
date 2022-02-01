import { useState, useEffect } from 'react';
import fetchPokemon from './services/pokemon';

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

  //   console.log(pokemon);
  console.log(pokemon[0]);

  return (
    <div className="App">
      <h1 onClick={fetchPokemon}>Click for Pokémon</h1>
      {pokemon.map((pokes) => (
        <p key={pokes.entry_number}>{pokes.pokemon_species.name}</p>
      ))}
    </div>
  );
}
