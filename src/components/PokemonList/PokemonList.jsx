import style from './PokemonList.css';
import { Link, useRouteMatch } from 'react-router-dom';

export default function PokemonList({ pokedex }) {
  const { url } = useRouteMatch();

  return (
    <ul className={style.list}>
      {pokedex.map((pokemon) => (
        <li key={pokemon.entry_number} className={style.name}>
          <Link to={`${url}/${pokemon.pokemon_species.name}`}>
            {pokemon.pokemon_species.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
