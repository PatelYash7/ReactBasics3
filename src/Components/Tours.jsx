import React from 'react'
import CardTours from './CardTours'

function Tours({tours,removeTour}) {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className=' text-4xl m-[4vh] rounded-[20px] border-[7px] border-dashed border-[rgb(1,17,160)] py-[2vh] px-[4vw]'>
                <h1>Travel with Yash</h1>
            </div>
            <div className='flex  justify-center flex-wrap max-w-[1300px] my-0 mx-auto'>
               {
                tours.map((tour)=>{
                    return <CardTours key={tour.id}data={tour} removeTour={removeTour}></CardTours>
                })
               }
            </div>
        </div>
    )
}

export default Tours