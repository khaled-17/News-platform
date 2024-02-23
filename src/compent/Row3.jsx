import React from 'react'
import LoginByGoogle from './LoginByGoogle'

function Row3() {
  return (
    <div className="flex  h-2/4 min-w-60 flex-col md:flex-row p-4  gap-4">
    
    
    <div className="  border  p-4  rounded-lg">
      <h2 className="text-blue-900 text-2xl font-bold">Become Volunteer</h2>
      <p>
        MMN is an organisation for members, by members - run on support of our volunteer members.
        If you have the skill and time to offer for MMS community's benefit, we need you!
      </p>
      <button className="bg-blue-950 rounded-lg text-white py-4 px-4 mt-4">Become a volunteer</button>
    </div>


<div className="  border  text-2xl p-4  rounded-lg">
      <h2 className="text-blue-950 font-bold">Already Member?</h2>
      
        <LoginByGoogle/>
        <div className='flex justify-center items-center'>
            <p className='font-bold'>or</p>
        </div>
        Member id
<input className='border p-3 rounded-lg' placeholder='enter member ID' / >
        Password
        
<input className='border p-3 rounded-lg' placeholder='enter member ID' / >
        <button className='bg-blue-950 m-3 p-4 rounded-md rounded-md text-white'>
        Login
        </button>
        
       
    </div>


 <div className="  border bg-orange-600 text-white  p-4  rounded-lg">
      <h2 className="text-white  mb-3 text-2xl font-bold">Become a Member</h2>
      <p>
        Price: kr <span className='border p-2 bg-white text-orange-600 rounded-md'>150 per</span> member
      </p>

      <p className=''>
      MMN Membership goes from January to December of each year. Do check our
        membership benefits and join us.

      </p>
      <button className="bg-gray-100 text-black rounded-md text-white py-1 px-4 mt-4">Become a member</button>
    </div>


 
   


    {/* Column 2 */}
   
  </div>
  )
}

export default Row3
