import React from 'react'
import webele from "../assets/webele.jpeg"
function Row1() {
  return (
    <div className='  border-gray-950'>

        <div className=' flex flex-row   flex-wrap '>
          
          
        <div className=" md:h-[32rem]   bg-red-600  w-full md:w-1/2 sm:h-[22rem] lg:w-1/2  flex items-center justify-center">
                <img className=' h-auto rounded-lg' src={webele} alt="" srcset="" />
            </div>


            <div className="md:h-[32rem] max-sm:h-[25rem] sm:h-[25rem] pl-3 bg-red-600  w-full md:w-1/2 lg:w-1/2 mb-4 flex items-center justify-center">

          <div className=''>
          <button className=' bg-white  p-2 my-3 rounded-md'>upcoming event</button>
                <h1 className=' text-white text-3xl '>Ganesh Chaturthi 2023</h1>
             
               <div className=' flex flex-row items-center'>
                <h1 className=' text-white'>date: 03 sep 2022</h1>
                <button className=' bg-white p-2 ml-3 rounded-md'>The date is tentative stay tuned for futher details...</button>
               </div>
               
                <h1 className=' text-white'>address: oslo, norway</h1>
                <h1 className=' text-white'>
                Ganeshotsav (Ganesh festival) is a key festival celebrated in Maharashtra. The
festival begins on the "Ganesh Chaturthi and ends after 10 days on "Anant
Chaturdashi" during the month of "Bhadrapada" as per Hindu calendar. On the day 1,.


                </h1>
                <button className='p-2 border text-white rounded-md'>Learn more</button>
                <button className='p-2 ml-3 bg-blue-950 text-white  rounded-md'>Register for event now</button>

          </div>

            </div>


        </div>
      
    </div>
  )
}

export default Row1
