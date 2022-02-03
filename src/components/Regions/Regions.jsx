import { useState, useEffect } from 'react';
import { fetchPokedexList, fetchRegionList } from '../../services/pokemon';
import { Link } from 'react-router-dom';
import { slicePokedex } from '../../utils/utils';

import styles from './Regions.css';

export default function Regions() {
  const [pokedexes, setPokedexes] = useState([]);
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get Pokedexes
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

  if (loading) return <p>Loading...</p>;

  const filterRegions = regions.map((region) => {
    return pokedexes.find((dex) => {
      return dex.name.includes(region.name);
    });
  });
  console.log(filterRegions);

  return (
    <section className={styles.list}>
      {filterRegions.map((region, index) => (
        <Link key={region.name} to={`/${region.name}`}>
          Gen {index + 1} | {slicePokedex(region.name)}
        </Link>
      ))}
    </section>
  );
}
