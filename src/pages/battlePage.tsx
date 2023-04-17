import React, {useEffect,useState} from 'react'
import {motion} from "framer-motion"

import Navbar from '../components/navbar'
import { PokemonType, PokemonBaseType } from '../interfaces/Pokemon';
import PokemonSelection from '../widgets/pokemonSelection';
import vsIcon from "../assets/Vs Icon.png"
import { setHistoryData } from '../services/history';
import { HistoryType } from '../interfaces/history';
import * as api from "../api/index"
import { getDate,getTime } from '../services/getDateAndTime';
import { useQuery } from 'react-query';

function BattlePage() {
    const [pokemonOne, setPokemonOne] = useState<PokemonType>();
    const [pokemonTwo, setPokemonTwo] = useState<PokemonType>();
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonType>()
    const [gameOver, setGameOver] = useState("")
    const [error, setError] = useState("")



    let getPokemons = async () => {
        let {data} = await api.getAllPokemons();
        return data.results as PokemonType[]
    }
    const {data, status} = useQuery('pokemons', getPokemons)
    if(status === "loading"){
        return <h1>Loading...</h1>
    }
    if(status ==="error"){
        return <h1>Error</h1>
    }
    const showError = (error: string) =>{
        setError(error)
        setTimeout(() => {
            setError("")
        }, 5000);
    }

    let battleHandler = () =>{
            if(!((pokemonOne && pokemonTwo))) {
                showError("Select Two Pokemons")
                return;
            }
            if(!selectedPokemon) {
                showError("Click on any one Pokemon")
                return;
            }
            let winnerPokemon = (pokemonOne?.base_experience > pokemonTwo?.base_experience)? pokemonOne : pokemonTwo;
            if(winnerPokemon.name === selectedPokemon?.name){
                setGameOver("You Won")
            }else{
                setGameOver("You Lost")
            }
            let historyData:HistoryType = {
                date: getDate(),
                time: getTime(),
                pokemonOne: pokemonOne,
                pokemonTwo: pokemonTwo,
                selectedPokemon: selectedPokemon
            }
            setHistoryData(historyData)
    }
  return (
    <>
    <Navbar/>
    {
        gameOver !== ""? 
        <motion.div className='border-2 border-white bg-semiTransparentBlue rounded-2xl h-[400px] m-auto w-[80%] absolute left-0 right-0 '
            initial= {{y: "-100px"}}
            animate={{y: "0"}}
        >
            <div  className='flex flex-col justify-center items-center h-full gap-10'>
            <motion.span
            initial= {{opacity: 0}}
            animate={{opacity:1}}
            transition={{duration:2}}
        >
            <h1 className='text-9xl text-darkBlue font-bold'>{gameOver}</h1>
            </motion.span>
                
                <button className='px-5 py-2 border-2 rounded-3xl border-darkBlue text-darkBlue' onClick={()=> window.location.reload()}>Play Again</button>
            </div>
        </motion.div>:
        <>
            <h1 className='text-center mt-10 text-white text-4xl'>Let The Battle Begin</h1>
            <div className='flex justify-center gap-10 mt-10 flex-wrap'>
                <PokemonSelection pokemons={data} setPokemon={setPokemonOne} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
                <img src={vsIcon} alt="VS" className='object-contain'/>
                <PokemonSelection pokemons={data} setPokemon={setPokemonTwo} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
            </div>
            <div className='flex justify-center w-full flex-col items-center'>
                {error.length > 0 && <p className='text-red'>Error: {error}</p>}
                <button className=' border-semiTransparentBlue rounded-full border-2 px-10 py-3 mx-10 mb-10 text-semiTransparentBlue text-xl' onClick={battleHandler}>Start Battle</button>
            </div>
        </>
    }

    
    </>
  )
}

export default BattlePage