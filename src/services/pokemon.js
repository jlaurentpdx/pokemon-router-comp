export async function fetchPokedexByRegion(region) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokedex/${region}`);
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

export async function fetchRegionList() {
  const resp = await fetch('https://pokeapi.co/api/v2/region');
  const { results } = await resp.json();

  return results;
}

export async function fetchPokemonByName(name) {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await resp.json();

  return data;
}
