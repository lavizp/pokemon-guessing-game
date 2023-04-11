import React from 'react'
import Navbar from '../components/navbar'
import PokemonImage from "../assets/image 11sdf.png"
function HomePage() {
  return (
    <div>
      <Navbar/>
      <main className='flex flex-wrap w-[80%] m-auto items-center h-[100%]  justify-center md:justify-between  pt-24'>
        <div className='flex flex-col gap-3'>
          <h2 className='text-4xl text-white'>Welcome To</h2>
          <h1 className='text-7xl text-white'>Battle Pokemon</h1>
          <h6 className='text-md text-white'>battle Pokemon is a fun and engaging way to battle betwe</h6>
          <button className='w-28 border-2 rounded-3xl border-semiTransparentBlue text-semiTransparentBlue p-2'>Start Battle</button>
        </div>
        <img src={PokemonImage} className='w-96'></img>
      </main>
    </div>
  )
}

export default HomePage
