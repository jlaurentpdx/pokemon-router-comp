import style from './PokemonList.css';
import { Link, useRouteMatch } from 'react-router-dom';

export default function PokemonList({ pokemon }) {
  const { url } = useRouteMatch();

  return (
    <section className={style.list}>
      {pokemon.map((pokes) => (
        <p key={pokes.entry_number} className={style.name}>
          <Link to={`${url}/${pokes.pokemon_species.name}`}>
            {pokes.pokemon_species.name}
          </Link>
        </p>
      ))}
    </section>
  );
}
