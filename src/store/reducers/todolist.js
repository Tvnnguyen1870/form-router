import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    todolists: [],
    todos: [],
}

export const getTodo = createAsyncThunk(
    'todolist/getTodo',
    async () => {
        const result = await fetch('http://localhost:3000/todo')
            .then(function(response) {
                return response.json();
            })
            .then(function(todos) {
                var htmls = todos.map(function(todo){
                    return `<li>${todo.name}</li>`
                })
                var html = htmls.join('');
                document.getElementById('todo').innerHTML = html;
            })

        return result;
    }
)

export const deleteUserById = createAsyncThunk('todo/deleteUserById', async (params, thunkAPI) => {
    const list = await axios.delete(`http://localhost:3000/todolists/${params?.id}`);
    thunkAPI.dispatch(getTodo());
    return list;
});

export const todolistSlice = createSlice({
    name: 'todolist',
    initialState,
    reducers: {
        addTodoList: (state, action) => {
            state.todolists.push(action.payload)
        },
        removeTodo: (state, action) => {
            const index = state.todolists.findIndex((todolist) => todolist.id === action.payload.id);
            if (index !== -1) {
                state.todolists.splice(index, 1);
            }
        }
    },

})

// Action creators are generated for each case reducer function
export const { addTodoList, removeTodo } = todolistSlice.actions;

const todolistReducer = todolistSlice.reducer;

export default todolistReducer