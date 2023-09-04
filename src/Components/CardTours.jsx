import React, { useState } from 'react'

function CardTours({data,removeTour}) {
    const[readmore,setReadmore]=useState(false);
    const description=readmore?data.info:`${data.info.substring(0,200)}....`
  return (
   <>
     <div className='w-[400px] h-max m-4 p-4 flex flex-col rounded-xl items-center justify-center shadow-xl bg-white'>
        <img className='w-[360px] aspect-[1/1] object-cover' src={data.image}></img>
        <div>
                  <div>
                      <h4 className='  text-lg font-bold text-orange-400 py-1'>{data.price}</h4>
                      <h4 className='text-xl font-bold text-red-500'>{data.name}</h4>
                  </div>
                  <div className=' text-md py-3'>
                    {description}
                    <span className='font-bold text-base hover:cursor-pointer ' onClick={()=>{setReadmore(!readmore)}}>
                        {readmore ? `show less`:`read more`}
                    </span>
                  </div>
        </div>
        <button className='bg-red-400 text-white rounded-lg px-4 py-2 hover:bg-red-700' onClick={()=>removeTour(data.id)}>
            Not Interested
        </button>
     </div>
   </>
  )
}

export default CardTours