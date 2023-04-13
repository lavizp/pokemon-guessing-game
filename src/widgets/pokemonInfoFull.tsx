import React from 'react'
import { PokemonType } from '../interfaces/Pokemon'
import { useQuery } from 'react-query'
import * as api from "../api/index"
interface Props{
  pokemon: {
    name: string
    url: string
}
}

const PokemonInfoFull: React.FC<Props>=({pokemon})=> {
  let getPokemons = async () => {
    let {data} = await api.getPokemonData(pokemon.url)
    return data
}
const {data, status} = useQuery(pokemon.name, getPokemons)
if(status === "loading"){
    return <h1>Loading...</h1>
}
if(status ==="error"){
    return <h1>Error</h1>
}
  return (
    <div className=' bg-white rounded-2xl p-20 flex justify-between items-center mt-5 w-[80%] m-auto'>
        <div>
          <img src={data.sprites.front_shiny} className='w-[200px]'/>
        </div>
    </div>
  )
}

export default PokemonInfoFull