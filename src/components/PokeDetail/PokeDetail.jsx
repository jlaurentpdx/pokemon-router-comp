import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokemonByName } from '../../services/pokemon';
import styles from './PokeDetail.css';

export default function PokeDetail() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchPokemonByName(name);
      setPokemon(data);
      setLoading(false);
    };
    fetchPokemon();
  }, [name]);

  console.log(pokemon);

  const { sprites, types } = pokemon;
  const pokeTypes = types?.map((type) => type.type.name);

  if (loading) return <p>loading...</p>;

  return (
    <div className={styles.info}>
      <h1 className={styles.headers}>{name}</h1>
      <hr />
      {types ? (
        <>
          <h2 className={styles.headers}>Types</h2>
          <div className={styles.types}>
            {pokeTypes.map((type) => (
              <h3 key={type}>{type}</h3>
            ))}
          </div>
        </>
      ) : null}
      {sprites ? (
        <>
          <h2 className={styles.headers}>Sprites</h2>
          <img src={sprites?.front_default} />
          <p>Original</p>
          <img src={sprites?.front_shiny} />
          <p>Shiny</p>
        </>
      ) : null}
    </div>
  );
}
