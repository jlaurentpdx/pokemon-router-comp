import { Link } from 'react-router-dom';

import styles from './Controls.css';

export default function Controls({ pokedexes }) {
  return (
    <section className={styles.list}>
      {pokedexes?.map((region) => (
        <Link key={region.name} to={`/${region.name}`}>
          {region.name}
        </Link>
      ))}
    </section>
  );
}
