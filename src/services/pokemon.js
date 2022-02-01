export default async function fetchPokemon() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokedex/6');
  const data = await resp.json();
  console.log(data);

  return data;
}
