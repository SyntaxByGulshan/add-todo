import React from 'react'
import AddTodo from '../features/addtodo'
import Todos from '../features/todos'
function Add() {
  return (
    <div className='bg-blue-400 h-screen'>

<h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default Add
