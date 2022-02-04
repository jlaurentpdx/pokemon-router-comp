import { useState, useEffect } from 'react';
import { fetchPokedexList, fetchRegionList } from '../../services/pokemon';
import { Link } from 'react-router-dom';
import { sliceRegion } from '../../utils/utils';

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

  return (
    <ul className={styles.list}>
      {filterRegions.map((region, index) => (
        <li key={region.name}>
          <Link to={`/${region.name}`}>
            Gen {index + 1} | {sliceRegion(region.name)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
