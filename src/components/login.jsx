import React, { useState } from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { login, logout } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [name,setName]=useState("");
  const [password,setpassword]=useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 


  const handleSubmit = (e) => {
  e.preventDefault(); 
   dispatch(
    login({ userData: { name, password } }) // Pass the username and password as payload

    
   )
   navigate('/add')
   
  };

  return (
    <div className="bg-blue-900 flex items-center justify-center h-screen text-blue-100">
      <div className="bg-blue-950 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-blue-100 font-bold text-center mb-4">Login</h2>
        <form onSubmit={(e) => handleSubmit(e)} >
          <div className="mb-4">
            <label htmlFor="username" className="block text-blue-100 mb-2">Username</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full px-4 py-2 border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="password" className="block text-blue-100 mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}



export default Login
