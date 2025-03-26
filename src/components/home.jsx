import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div className='h-screen bg-blue-900 flex  flex-col gap-5 items-center justify-center text-lg text-blue-100'>
      <div>
        WELCOME
      </div>
      <div>
        login to see your to do list
      </div>
      <div>
      <NavLink 
       to="/login"
       >
            <button
              
              className="bg-blue-800 hover:bg-blue-600 text-blue-100 font-medium py-2 px-4 m-4 rounded transition duration-200"
            >
              Login
            </button>
            </NavLink>
      </div>
    </div>
  )
}

export default Home