import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer