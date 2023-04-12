import React,{useEffect, useState} from 'react'
import Navbar from '../components/navbar'
import HistoryCard from '../widgets/historyCard'
import { getHistoryData } from '../services/history'
import { HistoryType } from '../interfaces/history'

function HistoryPage() {
    const[historyData, setHistoryData] = useState<HistoryType[]>([]);
    useEffect(()=>{
        let data: HistoryType[] = getHistoryData();
        setHistoryData(data);
    },[])
  return (
    <div>
        <Navbar/>
        <div className='w-[90%] m-auto h-auto'>
            <div className='flex items-end gap-2'>
                <h1 className='text-4xl text-white'>Battle History</h1>
                <p className='text-white text-xl'>{"("+historyData.length + " Battles)"}</p>
            </div>
            <div className='bg-tertiaryBlue rounded-3xl p-5 flex flex-col gap-5 mt-5'>
                {historyData.map((item,index)=>{
                    return <HistoryCard data={item} key={index} index={index}/>
                })}




            </div>
        </div>
    </div>
  )
}

export default HistoryPage
