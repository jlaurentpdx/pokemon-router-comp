import { Link } from 'react-router-dom';

import styles from './Controls.css';

export default function Controls({ pokedexes }) {
  return (
    <section className={styles.list}>
      {pokedexes
        ? pokedexes.map((Generation) => (
            <Link key={Generation.name} to={`/${Generation.name}`}>
              {Generation.name}
            </Link>
          ))
        : null}
    </section>
  );
}
