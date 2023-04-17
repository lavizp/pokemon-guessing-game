import React, { useState } from 'react'
import Navbar from '../components/navbar'
import { PokemonBaseType } from '../interfaces/Pokemon';
import { useQuery } from 'react-query';
import LiveSearch from '../components/liveSearch';
import PokemonInfoCard from '../widgets/pokemonInfoCard';
import PokemonInfoFull from '../widgets/pokemonInfoFull';
import * as api from "../api/index"

function PokedexPage() {
    const [results, setResults] = useState<PokemonBaseType[]>([]);
    const [selectedProfile, setSelectedProfile] = useState<PokemonBaseType>();
      let getPokemons = async () => {
        let {data} = await api.getAllPokemons();
        return data.results as PokemonBaseType[]
    }
    const onPokemonButtonClick =(name: string, url: string)=>{
      setSelectedProfile({name,url})
    }
    const {data, status} = useQuery('pokemon_list', getPokemons)
    if(status === "loading"){
        return <h1>Loading...</h1>
    }
    if(status ==="error"){
        return <h1>Error</h1>
    }
      const handleChange = (e:any) => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);
    
        const filteredValue: any = data?.filter((profile:any) =>
          profile.name.toLowerCase().startsWith(target.value)
        );
        setResults(filteredValue);
      };

  return (
    <div>
        <Navbar/>
        <div className='w-[90%] m-auto h-auto'>
            <div className='flex items-end gap-2'>
                <h1 className='text-4xl text-white'>Pokedex</h1>
                <p className='text-white text-xl'>Pokemons</p>
            </div>
            <h2 className='text-center text-xl text-white mt-5'>Search Pokemons</h2>
            <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item:any) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
    {!selectedProfile? 
    <div className='flex flex-wrap gap-2 justify-between mt-10'>

    {    
        data?.slice(0,20).map((item: {name: string, url: string})=>{
            return <PokemonInfoCard pokemon={item} onclick={onPokemonButtonClick}/>
 
        })
    }    
    </div>
    :
    <>
      <PokemonInfoFull pokemon={selectedProfile}/>
      <div className='flex justify-center'>
        <button onClick={()=> setSelectedProfile(undefined)} className='px-5 py-1 mt-5 border-2 border-white text-white rounded-3xl mb-10'>Back</button>
      </div>
     </>
    }
        </div>
    </div>
  )
}

export default PokedexPage