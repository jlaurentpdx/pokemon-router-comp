export async function fetchPokedexByGen(gen) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
  const { pokemon_entries } = await resp.json();

  return pokemon_entries;
}

export async function fetchPokedexList() {
  const check = await fetch(
    'https://pokeapi.co/api/v2/pokedex?offset=0&limit=28'
  );
  const { results } = await check.json();

  return results;
}

// export async function fetchPokemonGen1() {
//   const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
//   const data = await resp.json();
//   const entries = await data.pokemon_entries;

//   return entries;
// }
