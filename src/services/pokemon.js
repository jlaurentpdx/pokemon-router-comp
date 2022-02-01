export default async function fetchPokemonGen4() {
  const resp = await fetch('https://pokeapi.co/api/v2/pokedex/6');
  const data = await resp.json();
  const entries = await data.pokemon_entries;
  console.log(entries);

  return entries;
}
