import { Link } from 'react-router-dom';
import { sliceGeneration } from '../../utils/utils';

import styles from './Regions.css';

export default function Regions({ regions, pokedexes }) {
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
          Gen {index + 1} | {sliceGeneration(region.name)}
        </Link>
      ))}
    </section>
  );
}
