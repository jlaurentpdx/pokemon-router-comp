import PokemonList from '../../components/PokemonList/PokemonList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokedexByGen } from '../../services/pokemon';

export default function Generation() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const { generation } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonList = await fetchPokedexByGen(generation);
      setPokemon(pokemonList);
      setLoading(false);
    };
    getPokemon();
  }, [generation]);

  if (loading) return <p>Loading...</p>;

  return <PokemonList {...{ pokemon }} />;
}
