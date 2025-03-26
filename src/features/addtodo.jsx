import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice' 

function AddTodo() {
    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('Medium'); // State for priority
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!input.trim()) {
            alert("Please enter a todo item.");
            return;
        }

        dispatch(addTodo({ text: input, priority })); // Dispatch the action with text and priority
        setInput(''); // Clear the input field
    }

    return (
        <form onSubmit={addTodoHandler} className="flex flex-col md:flex-row space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex-1"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)} // Update priority state
                className="bg-gray-800 rounded border border-gray-700 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
