import axios from "axios";

const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

export const getAllPokemons = ()=>axios.get(allPokemonUrl);
export const getPokemonData = (url: string) =>axios.get(url);
