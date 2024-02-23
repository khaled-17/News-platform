import React from 'react'
import LoginByGoogle from './LoginByGoogle'

function Row3() {
  return (
    <div className="grid grid-cols-1 h-96 md:grid-cols-3 ">
    
    
    <div className="border h-full p-4 m-4 rounded-lg">
      <h2 className="text-blue-900 text-2xl font-bold">Become Volunteer</h2>
      <p>
        MMN is an organisation for members, by members - run on support of our volunteer members.
        If you have the skill and time to offer for MMS community's benefit, we need you!
      </p>
      <button className="bg-blue-950 rounded-lg text-white py-4 px-4 mt-4">Become a volunteer</button>
    </div>


<div className="border h-full text-2xl p-4 m-4 rounded-lg">
      <h2 className="text-blue-950 font-bold">Already Member?</h2>
      <p>
        <LoginByGoogle/>
        Member id
        Enter member ID
        Password
        Enter member ID
        OR
        Login
      </p>
    </div>


 <div className="border h-full p-4 m-4 rounded-lg">
      <h2 className="text-blue-950 text-2xl font-bold">Become a Member</h2>
      <p>
        Price: kr 150 per member
        MMN Membership goes from January to December of each year. Do check our
        membership benefits and join us.
      </p>
      <button className="bg-blue-500 text-white py-2 px-4 mt-4">Become a member</button>
    </div>


 
   


    {/* Column 2 */}
   
  </div>
  )
}

export default Row3
