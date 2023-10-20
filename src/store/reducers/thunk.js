import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    thunks: [],
    users: [],
    id: [],
}

export const getListUser = createAsyncThunk(
    'thunk/getListUser',
    async () => {
        const result = await fetch('http://localhost:3000/users')
            .then(function(response) {
                return response.json();
            })
            .then(function(users) {
                var htmls = users.map(function(user){
                    return `<li>${user.name}</li>`
                })

                var html = htmls.join('');
                document.getElementById('user').innerHTML = html;
            })

        return result;
    }
)

export const deleteUserById = createAsyncThunk('user/deleteUserById', async (params, thunkAPI) => {
    const list = await axios.delete(`http://localhost:3000/users/${params?.id}`);
    thunkAPI.dispatch(getListUser());
    return list;
});

export const thunkSlice = createSlice({
    name: 'thunk',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.thunks.push(action.payload)
        },
        removeUser: (state, action) => {
            const index = state.thunks.findIndex((thunk) => thunk.id === action.payload.id);
            if (index !== -1) {
                state.thunks.splice(index, 1);
            }
        },
        userName: (state, action) => {
            state.users.push(action.payload)
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getListUser.fulfilled, (state, action) => {
            console.log({state, action});
        })
    }
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser, userName } = thunkSlice.actions;

const thunkReducer = thunkSlice.reducer;

export const selectUser = (state) => state.userSlice;

export default thunkReducer