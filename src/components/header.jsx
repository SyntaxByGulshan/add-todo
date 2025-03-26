import React from 'react'
import {  NavLink } from "react-router";
function Header() {
  return (
    <header className=" fixed w-screen flex justify-between items-center bg-blue-950 p-4 shadow-md">
      {/* Logo or Title */}
      <h1 className="text-2xl text-blue-100 font-bold">To-Do App</h1>

      {/* Buttons */}
      <div className='flex gap-2'>
       <NavLink 
       to=""
       >
      <button
            
            className="bg-blue-900 hover:bg-blue-600 text-blue-100 font-medium py-2 px-4 rounded transition duration-200"
          >
            Logout
          </button>
          </NavLink>
       <NavLink 
       to="login"
       >
            <button
              
              className="bg-blue-800 hover:bg-blue-600 text-blue-100 font-medium py-2 px-4 rounded transition duration-200"
            >
              Login
            </button>
            </NavLink>
        
        </div>
      </header>
  

  )
}

export default Header