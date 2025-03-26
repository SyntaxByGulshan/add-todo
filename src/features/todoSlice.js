import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [] // Removed initial todo item
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { text, priority } = action.payload; // Destructure text and priority from payload
            console.log("Adding todo:", text, priority); // Debugging line to check payload

            const todo = {
                id: nanoid(), 
                text: text,
                priority: priority // Add priority to the todo object
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
