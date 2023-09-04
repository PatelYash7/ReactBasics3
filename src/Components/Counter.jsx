import React,{useState} from 'react'


function Counter() {
  const[change,setChange]=useState(0)
  return (
    <>
    <div className='h-screen w-screen bg-red-600 flex flex-col justify-center gap-8 items-center'>
              
                  <div className='text-white text-xl '>
                    Increment & Decrement
                  </div>
                  <div className='flex justify-between items-center text-2xl  rounded-md bg-white gap-6 px-2 py-1'>
                     <button className='text-4xl border-r-2 border-gray-400 px-4 py-1'onClick={()=>setChange(change-1)} >-</button>
                     <p>{change}</p>
                     <button className='text-4xl border-l-2 border-gray-400 px-4 py-1' onClick={()=>setChange(change+1)}>+</button>
                  </div>
                  <button className='bg-white px-4 py-2  rounded ' onClick={()=>setChange(0)}>Reset</button>
            
    </div>
    </>
  )
}

export default Counter