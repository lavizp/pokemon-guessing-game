import React, {useEffect,useState} from 'react'
import LiveSearch from '../components/liveSearch';
import { PokemonType,PokemonBaseType } from '../interfaces/Pokemon';
import * as api from "../api/index"
import PokemonBattleCard from '../components/pokemonBattleCard';

interface Props{
    pokemons: PokemonType[] | undefined,
    selectedPokemon: PokemonType | undefined
    setPokemon:(pokemon: PokemonType) => void
    setSelectedPokemon:(pokemon: PokemonType | undefined) => void
}

const PokemonSelection: React.FC<Props>=({pokemons, setPokemon, selectedPokemon,setSelectedPokemon}) =>{
    const [results, setResults] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState<PokemonBaseType>();
      const [currentPokemon, setCurrentPokemon] = useState<PokemonType | undefined>()
      const handleChange = (e:any) => {
        const { target } = e;
        if (!target.value.trim()) return setResults([]);
    
        const filteredValue: any = pokemons?.filter((profile:any) =>
          profile.name.toLowerCase().startsWith(target.value)
        );
        setResults(filteredValue);
      };
      let setData = async()=>{
        if(selectedProfile){
            let {data}: any = await api.getPokemonData(selectedProfile?.url)
            setCurrentPokemon(data)
            setPokemon(data)
        }
    }
    useEffect(()=>{
        setData();
    },[selectedProfile])

  return (
    <div>
            <LiveSearch
      results={results}
      value={selectedProfile?.name}
      renderItem={(item:any) => <p>{item.name}</p>}
      onChange={handleChange}
      onSelect={(item) => setSelectedProfile(item)}
    />
    <div onClick={()=>setSelectedPokemon(currentPokemon)}>
        <PokemonBattleCard pokemon={currentPokemon} isSelected={selectedPokemon?.name == currentPokemon?.name}/>
    </div>
    </div>
  )
}

export default PokemonSelection
