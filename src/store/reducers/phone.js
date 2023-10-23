import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    phonebooks: [],
    posts: [],
}

// First, create the thunk
export const fetchPosts = createAsyncThunk(
    'phone/fetchPosts',
    async (payload, thunkAPI) => {
        //call api
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json;
        console.log(result);
        return result.slice(0, 10);
    }
);


export const addIdForPhone = createAsyncThunk(
    'phone/addIdForPhone',
    async (payload) => {
        return {...payload, id: uuidv4()}
    }
);

export const phonebookSlice = createSlice({
    name: 'phonebook',
    initialState,
    reducers: {
        addPhone: (state, action) => {
            state.phonebooks.push(action.payload);
        },
        removePhone: (state, action) => {
            state.phonebooks = state.phonebooks.filter((phonebook) => phonebook.id !== action.payload)
        },
        editPhone: (state, action ) => {
            const index = state.phonebooks.findIndex(
                (phonebook) => phonebook.id === action.payload.id
            )
            if(index < 0) return;

            state.phonebooks[index] = action.payload
        }
     },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            console.log({state, action});
            state.posts = action.payload;
        })
        builder.addCase(addIdForPhone.fulfilled((state, action) => {
            state.phonebooks.push(action.payload);
        }))
    }
})

// Action creators are generated for each case reducer function
export const { addPhone, removePhone , editPhone} = phonebookSlice.actions;

const phonebookReducer = phonebookSlice.reducer;

export default phonebookReducer