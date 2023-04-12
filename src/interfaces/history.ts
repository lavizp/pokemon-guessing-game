import { PokemonType } from "./Pokemon"

export interface HistoryType{
    date: string
    time: string
    pokemonOne: PokemonType
    pokemonTwo: PokemonType
    selectedPokemon: PokemonType

}