import style from './PokemonList.css';

export default function PokemonList({ pokemon }) {
  return (
    <section className={style.list}>
      {pokemon.map((pokes) => (
        <p key={pokes.entry_number} className={style.name}>
          {pokes.pokemon_species.name}
        </p>
      ))}
    </section>
  );
}
