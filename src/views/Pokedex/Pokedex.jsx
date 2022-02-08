import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokedexByRegion } from '../../services/pokemon';
import { sliceRegion } from '../../utils/utils';

import PokemonList from '../../components/PokemonList/PokemonList';

export default function Pokedex() {
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);

  const { region } = useParams();

  useEffect(() => {
    const getPokedex = async () => {
      setLoading(true);
      const pokedexByRegion = await fetchPokedexByRegion(region);
      setPokedex(pokedexByRegion);
      setLoading(false);
    };
    getPokedex();
  }, [region]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{sliceRegion(region)}</h1>
      <PokemonList {...{ pokedex }} />
    </>
  );
}
