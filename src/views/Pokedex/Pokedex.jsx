import PokemonList from '../../components/PokemonList/PokemonList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokedexByGen } from '../../services/pokemon';
import { slicePokedex } from '../../utils/utils';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const { generation } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const pokemonList = await fetchPokedexByGen(generation);
      setPokemon(pokemonList);
      setLoading(false);
    };
    getPokemon();
  }, [generation]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{slicePokedex(generation)}</h1>
      <PokemonList {...{ pokemon }} />
    </>
  );
}
