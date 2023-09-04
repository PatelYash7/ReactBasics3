import React, { useState } from 'react'
import data from '../Utils/data'
import Tours from '../Components/Tours';

function TravelWebsite() {
    const[tours,setTours]=useState(data);
    function removeTour(id){
        const newtour=tours.filter(tour=> tour.id !==id);
        setTours(newtour);
    }
    function refresh(){
      setTours(data);
    }
    if (tours.length===0) {
      return(
        <div className='min-h-screen bg-zinc-200 flex flex-col items-center justify-center'>
          <h2 className='text-4xl font-extrabold text-red-800 p-4'>No tours Left</h2>
          <button className='text-2xl  bg-green-700 text-white hover:bg-green-400 px-4 py-2 rounded-md  hover:text-black' onClick={refresh}>
            Refresh 
          </button>
        </div>
      )
    }
  return (
    <div className='min-h-screen bg-zinc-200'>

    <Tours tours={tours} removeTour={removeTour}></Tours>
  
    </div>
  )
}

export default TravelWebsite