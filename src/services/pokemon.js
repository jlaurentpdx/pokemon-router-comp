export async function fetchPokedexByGen(gen) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokedex/${gen}`);
  const { pokemon_entries } = await resp.json();

  return pokemon_entries;
}

export async function fetchPokedexList() {
  const resp = await fetch(
    'https://pokeapi.co/api/v2/pokedex?offset=0&limit=28'
  );
  const { results } = await resp.json();

  return results;
}
