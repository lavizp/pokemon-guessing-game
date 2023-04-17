export interface PokemonType{
    base_experience: number,
    name: string,
    sprites: {
        front_shiny: string
    }
    abilities: [{
        ability:{
            name: string
        }
    }]
    moves: [{
        move:{
            name: string
            url: string
        }
    }]
}

export interface PokemonBaseType{
    name: string
    url: string
}