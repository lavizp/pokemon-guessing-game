import React from 'react'
import { PokemonType } from '../interfaces/Pokemon'
import winnerIcon from "../assets/Winner.png"

interface Props{
    pokemon: PokemonType | undefined
    isSelected: boolean
}

const PokemonBattleCard: React.FC<Props>=({pokemon, isSelected})=> {
  return (
    <div className='border-2 border-semiTransparentBlue h-[250px] mt-10 flex justify-center items-center rounded-2xl bg-white relative -z-10'>
            {
                !pokemon ? <h1>Select Pokemon</h1> : 
                <div className='flex gap-2'>
                    {isSelected && <img src={winnerIcon} className='absolute h-12 mt-[-10px]'/>}
                    <div className=' flex flex-col items-center'>

                        <img src={pokemon.sprites.front_shiny} alt={pokemon.name} className='h-[180px] object-cover'/>
                        <h2 className='text-darkBlue'>{pokemon.name}</h2>
                    </div>
                    <div className='flex flex-col w-1/2 items-start'>
                        <h2 className='font-bold text-2xl'>Pokemon Stats</h2>
                        <h5 className='text-darkBlue flex gap-10 mt-2 text-xl justify-start w-full'><p className='w-10'>HP:</p> <p className='text-black'>{pokemon.base_experience}</p></h5>
                        <h5 className='text-darkBlue flex gap-10 mt-2 text-xl w-full justify-start'><p className='w-10'>Moves:</p> <div className='text-black flex flex-col'>
                            {pokemon.abilities.map((item)=>
                                <p>{item.ability.name}</p>
                            )}
                            </div></h5>

                    </div>
                </div>   
            }
    </div>
  )
}

export default PokemonBattleCard
