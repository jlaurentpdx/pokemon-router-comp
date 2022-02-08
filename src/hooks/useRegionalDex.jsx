import { useState, useEffect } from 'react';
import { fetchPokedexList, fetchRegionList } from '../services/pokemon';

export default function useRegionalDex() {
  const [pokedexes, setPokedexes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokedexes = async () => {
      const pokedexList = await fetchPokedexList();
      const regionList = await fetchRegionList();
      setPokedexes(pokedexList);
      setRegions(regionList);
      setLoading(false);
    };
    getPokedexes();
  }, []);

  const filterRegions = regions.map((region) => {
    return pokedexes.find((dex) => {
      return dex.name.includes(region.name);
    });
  });

  return { filterRegions, loading };
}
