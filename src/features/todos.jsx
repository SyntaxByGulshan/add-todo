import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './todoSlice'

function Todos() {
    const todos = useSelector(state => state.todo.todos)


    const dispatch = useDispatch()

    // Create a copy of the todos array and sort it by priority
    const sortedTodos = [...todos].sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return (
        <>
            
            {sortedTodos.length === 0 ? (
                <p className="text-white">No todos available</p>
            ) : (
                <ul className="list-none">
                    {sortedTodos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div className='text-white'>{todo.text} - <span className="text-yellow-400">{todo.priority}</span></div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Todos
