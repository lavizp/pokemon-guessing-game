import React,{useState,useEffect} from 'react'
import Pokemon from "../assets/image 11sdf.png"
import VSIcon from "../assets/Vs Icon.png"
import TrophyIcon from "../assets/Trophy.png"
import { HistoryType } from '../interfaces/history'
import { PokemonType } from '../interfaces/Pokemon'

interface Props{
    data: HistoryType | undefined
    index: number

}
const HistoryCard:React.FC<Props> =({data, index})=> {
    const [winnerPokemon, setWinnerPokemon] = useState<PokemonType>()
    const [didWin, setDidWin] = useState(false)
    useEffect(()=>{
        if(data){

            let winner: PokemonType = (data?.pokemonOne.base_experience > data?.pokemonTwo.base_experience)? data?.pokemonOne: data?.pokemonTwo
            setWinnerPokemon(winner);
        }

    },[])

    useEffect(()=>{
        if(data && winnerPokemon){
            setDidWin(winnerPokemon.base_experience <= data.selectedPokemon.base_experience)
        }
    },[winnerPokemon])
  return (
    <div className='flex h-[90px] border-2 border-white rounded-3xl justify-between items-center px-5'>
        <h2 className='text-white text-3xl'>{index+1+ "."}</h2>
        <div className='flex flex-col'>
            <p className='text-semiTransparentBlue'>Date</p>
            <p className='text-white'>{data?.date}</p>
        </div>
        <div className='flex flex-col'>
            <p className='text-semiTransparentBlue'>Time</p>
            <p className='text-white'>{data?.time}</p>
        </div>
        <div className='flex gap-5 items-center w-[500px] justify-around'>
            <div className='h-10 w-1 bg-white'/>
            <img src={data?.pokemonOne.sprites.front_shiny} className='h-12'/>
            <h3 className='text-white text-xl'>{data?.pokemonOne.name}</h3>
            <img src={VSIcon} className='h-12'/>
            <h3 className='text-white text-xl'>{data?.pokemonTwo.name}</h3>
            <img src={data?.pokemonTwo.sprites.front_shiny} className='h-12'/>
            <div className='h-10 w-1 bg-white'/>
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className='text-white text-xl'>{didWin? "Won": "Lost"}</h2>
            <img src={TrophyIcon} className='h-10'/>
            <img src={winnerPokemon?.sprites.front_shiny} className='h-12'/>


        </div>




    </div>
  )
}

export default HistoryCard