// Behavior tests in App
export const pokedexes = {
  count: 28,
  next: null,
  previous: null,
  results: [
    { name: 'national', url: 'https://pokeapi.co/api/v2/pokedex/1/' },
    { name: 'kanto', url: 'https://pokeapi.co/api/v2/pokedex/2/' },
    { name: 'original-johto', url: 'https://pokeapi.co/api/v2/pokedex/3/' },
    { name: 'hoenn', url: 'https://pokeapi.co/api/v2/pokedex/4/' },
    { name: 'original-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/5/' },
    { name: 'extended-sinnoh', url: 'https://pokeapi.co/api/v2/pokedex/6/' },
    { name: 'updated-johto', url: 'https://pokeapi.co/api/v2/pokedex/7/' },
    { name: 'original-unova', url: 'https://pokeapi.co/api/v2/pokedex/8/' },
    { name: 'updated-unova', url: 'https://pokeapi.co/api/v2/pokedex/9/' },
    { name: 'conquest-gallery', url: 'https://pokeapi.co/api/v2/pokedex/11/' },
    { name: 'kalos-central', url: 'https://pokeapi.co/api/v2/pokedex/12/' },
    { name: 'kalos-coastal', url: 'https://pokeapi.co/api/v2/pokedex/13/' },
    { name: 'kalos-mountain', url: 'https://pokeapi.co/api/v2/pokedex/14/' },
    { name: 'updated-hoenn', url: 'https://pokeapi.co/api/v2/pokedex/15/' },
    { name: 'original-alola', url: 'https://pokeapi.co/api/v2/pokedex/16/' },
    { name: 'original-melemele', url: 'https://pokeapi.co/api/v2/pokedex/17/' },
    { name: 'original-akala', url: 'https://pokeapi.co/api/v2/pokedex/18/' },
    { name: 'original-ulaula', url: 'https://pokeapi.co/api/v2/pokedex/19/' },
    { name: 'original-poni', url: 'https://pokeapi.co/api/v2/pokedex/20/' },
    { name: 'updated-alola', url: 'https://pokeapi.co/api/v2/pokedex/21/' },
    { name: 'updated-melemele', url: 'https://pokeapi.co/api/v2/pokedex/22/' },
    { name: 'updated-akala', url: 'https://pokeapi.co/api/v2/pokedex/23/' },
    { name: 'updated-ulaula', url: 'https://pokeapi.co/api/v2/pokedex/24/' },
    { name: 'updated-poni', url: 'https://pokeapi.co/api/v2/pokedex/25/' },
    { name: 'letsgo-kanto', url: 'https://pokeapi.co/api/v2/pokedex/26/' },
    { name: 'galar', url: 'https://pokeapi.co/api/v2/pokedex/27/' },
    { name: 'isle-of-armor', url: 'https://pokeapi.co/api/v2/pokedex/28/' },
    { name: 'crown-tundra', url: 'https://pokeapi.co/api/v2/pokedex/29/' },
  ],
};

export const pokemonInRegion = {
  pokemon_entries: [
    {
      entry_number: 1,
      pokemon_species: {
        name: 'grookey',
        url: 'https://pokeapi.co/api/v2/pokemon-species/810/',
      },
    },
    {
      entry_number: 2,
      pokemon_species: {
        name: 'thwackey',
        url: 'https://pokeapi.co/api/v2/pokemon-species/811/',
      },
    },
    {
      entry_number: 3,
      pokemon_species: {
        name: 'rillaboom',
        url: 'https://pokeapi.co/api/v2/pokemon-species/812/',
      },
    },
    {
      entry_number: 4,
      pokemon_species: {
        name: 'scorbunny',
        url: 'https://pokeapi.co/api/v2/pokemon-species/813/',
      },
    },
    {
      entry_number: 5,
      pokemon_species: {
        name: 'raboot',
        url: 'https://pokeapi.co/api/v2/pokemon-species/814/',
      },
    },
    {
      entry_number: 6,
      pokemon_species: {
        name: 'cinderace',
        url: 'https://pokeapi.co/api/v2/pokemon-species/815/',
      },
    },
    {
      entry_number: 7,
      pokemon_species: {
        name: 'sobble',
        url: 'https://pokeapi.co/api/v2/pokemon-species/816/',
      },
    },
    {
      entry_number: 8,
      pokemon_species: {
        name: 'drizzile',
        url: 'https://pokeapi.co/api/v2/pokemon-species/817/',
      },
    },
    {
      entry_number: 9,
      pokemon_species: {
        name: 'inteleon',
        url: 'https://pokeapi.co/api/v2/pokemon-species/818/',
      },
    },
  ],
};

export const regions = {
  count: 8,
  next: null,
  previous: null,
  results: [
    { name: 'kanto', url: 'https://pokeapi.co/api/v2/region/1/' },
    { name: 'johto', url: 'https://pokeapi.co/api/v2/region/2/' },
    { name: 'hoenn', url: 'https://pokeapi.co/api/v2/region/3/' },
    { name: 'sinnoh', url: 'https://pokeapi.co/api/v2/region/4/' },
    { name: 'unova', url: 'https://pokeapi.co/api/v2/region/5/' },
    { name: 'kalos', url: 'https://pokeapi.co/api/v2/region/6/' },
    { name: 'alola', url: 'https://pokeapi.co/api/v2/region/7/' },
    { name: 'galar', url: 'https://pokeapi.co/api/v2/region/8/' },
  ],
};

export const sobble = {
  abilities: [
    {
      ability: {
        name: 'torrent',
        url: 'https://pokeapi.co/api/v2/ability/67/',
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: { name: 'sniper', url: 'https://pokeapi.co/api/v2/ability/97/' },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 62,
  forms: [
    { name: 'sobble', url: 'https://pokeapi.co/api/v2/pokemon-form/816/' },
  ],
  game_indices: [],
  height: 3,
  held_items: [],
  id: 816,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/816/encounters',
  moves: [],
  name: 'sobble',
  order: -1,
  past_types: [],
  species: {
    name: 'sobble',
    url: 'https://pokeapi.co/api/v2/pokemon-species/816/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/816.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/816.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/816.png',
    front_shiny_female: null,
    other: {
      dream_world: { front_default: null, front_female: null },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/816.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/816.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/816.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: null,
          back_gray: null,
          back_transparent: null,
          front_default: null,
          front_gray: null,
          front_transparent: null,
        },
        yellow: {
          back_default: null,
          back_gray: null,
          back_transparent: null,
          front_default: null,
          front_gray: null,
          front_transparent: null,
        },
      },
      'generation-ii': {
        crystal: {
          back_default: null,
          back_shiny: null,
          back_shiny_transparent: null,
          back_transparent: null,
          front_default: null,
          front_shiny: null,
          front_shiny_transparent: null,
          front_transparent: null,
        },
        gold: {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
          front_transparent: null,
        },
        silver: {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
          front_transparent: null,
        },
      },
      'generation-iii': {
        emerald: { front_default: null, front_shiny: null },
        'firered-leafgreen': {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
        },
        'ruby-sapphire': {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        'heartgold-soulsilver': {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        platinum: {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/816.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/816.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/816.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/816.png',
          front_shiny_female: null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        'x-y': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-vii': {
        icons: { front_default: null, front_female: null },
        'ultra-sun-ultra-moon': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/816.png',
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 50,
      effort: 0,
      stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' },
    },
    {
      base_stat: 40,
      effort: 0,
      stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' },
    },
    {
      base_stat: 70,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 40,
      effort: 1,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 70,
      effort: 1,
      stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' },
    },
  ],
  types: [
    {
      slot: 1,
      type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' },
    },
  ],
  weight: 40,
};

// PokeDetail test only
export const squirtle = {
  name: 'squirtle',
  order: 10,
  past_types: [],
  species: {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
  },
  sprites: {
    back_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png',
    back_female: null,
    back_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png',
    back_shiny_female: null,
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    front_female: null,
    front_shiny:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
        front_female: null,
      },
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/7.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/7.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/7.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/7.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/7.png',
        },
        yellow: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/7.png',
          back_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/7.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/7.png',
          front_gray:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/7.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/7.png',
        },
      },
      'generation-ii': {
        crystal: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/7.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/7.png',
          back_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/7.png',
          back_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/7.png',
          front_shiny_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/7.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/7.png',
        },
        gold: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/7.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/7.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/7.png',
        },
        silver: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/7.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/7.png',
          front_transparent:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/7.png',
        },
      },
      'generation-iii': {
        emerald: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/7.png',
        },
        'firered-leafgreen': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/7.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/7.png',
        },
        'ruby-sapphire': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/7.png',
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/7.png',
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/7.png',
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/7.png',
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/7.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/7.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/7.png',
          front_shiny_female: null,
        },
        'heartgold-soulsilver': {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/7.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/7.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/7.png',
          front_shiny_female: null,
        },
        platinum: {
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/7.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/7.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/7.png',
          front_shiny_female: null,
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif',
            back_female: null,
            back_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/7.gif',
            back_shiny_female: null,
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',
            front_female: null,
            front_shiny:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/7.gif',
            front_shiny_female: null,
          },
          back_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/7.png',
          back_female: null,
          back_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/7.png',
          back_shiny_female: null,
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/7.png',
          front_shiny_female: null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/7.png',
          front_shiny_female: null,
        },
        'x-y': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/7.png',
          front_shiny_female: null,
        },
      },
      'generation-vii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/7.png',
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/7.png',
          front_female: null,
          front_shiny:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/7.png',
          front_shiny_female: null,
        },
      },
      'generation-viii': {
        icons: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/7.png',
          front_female: null,
        },
      },
    },
  },
  types: [
    {
      slot: 1,
      type: {
        name: 'water',
        url: 'https://pokeapi.co/api/v2/type/11/',
      },
    },
  ],
  weight: 90,
};
