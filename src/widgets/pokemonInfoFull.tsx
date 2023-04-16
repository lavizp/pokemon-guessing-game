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
    <div className=' bg-white rounded-2xl p-20 flex justify-around items-center mt-5 w-[60%] m-auto'>
        <div className='flex flex-wrap justify-between w-full mr-20'>
          <img src={data.sprites.front_shiny} className='w-[200px]'/>
          <div className='flex flex-col'>
            <h2 className='text-4xl font-bold'>{data.name}</h2>
            <h2 className='text-xl'>Moves:</h2>
              {data.moves.slice(0,4).map((item: any,key: any) =>
                <h2 key={key} className='text-black'>
                  -{item.move.name}
                </h2>
              )}
          </div>
        </div>
    </div>
  )
}

export default PokemonInfoFull