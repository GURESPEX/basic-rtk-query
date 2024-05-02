import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonRequest } from "./Request/pokemonRequest";
import { Pokemon, PokemonResponse } from "./Response/pokemonResponse";
import { PokemonsRequest } from "./Request/pokemonsRequest";
import { PokemonsResponse } from "./Response/pokemonsResponse";

const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonsResponse, PokemonsRequest>({
      query: (data) => {
        const params = new URLSearchParams({
          limit: data.limit.toString(),
          offset: data.offset.toString(),
        });
        return { url: `pokemon?${params}`, method: "GET" };
      },
    }),
    getPokemon: builder.query<Pokemon, PokemonRequest>({
      query: (name) => {
        return { url: `pokemon/${name}`, method: "GET" };
      },
      transformResponse: (response: PokemonResponse) => {
        const transformedPokemon = {
          id: response.id,
          name: response.name.charAt(0).toUpperCase() + response.name.slice(1),
          types: response.types.map(
            (type) =>
              type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
          ),
          img: {
            main: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`,
            default: {
              front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.id}.png`,
              back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${response.id}.png`,
            },
            shiny: {
              front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${response.id}.png`,
              back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${response.id}.png`,
            },
          },
          exp: response.base_experience,
          stats: {
            hp: response.stats[0].base_stat,
            attack: response.stats[1].base_stat,
            defence: response.stats[2].base_stat,
            specialAttack: response.stats[3].base_stat,
            specialDefense: response.stats[4].base_stat,
            speed: response.stats[5].base_stat,
          },
          abilities: response.abilities.map(
            (ability) =>
              ability.ability.name.charAt(0).toUpperCase() +
              ability.ability.name.slice(1)
          ),
        };

        return transformedPokemon;
      },
    }),
  }),
});

export const { useGetPokemonQuery, useGetPokemonsQuery } = pokemonApi;
export default pokemonApi;
