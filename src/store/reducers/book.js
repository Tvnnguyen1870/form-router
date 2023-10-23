import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    books: [],
    items: [],
}

export const getBook = createAsyncThunk(
    'book/getBook',
    async () => {
        const result = await fetch('http://localhost:3000/books')
            .then(function(response) {
                return response.json();
            })
            .then(function(items) {
                var htmls = items.map(function(item){
                    return `<li>${item.name}</li>`
                })

                var html = htmls.join(''); 
                document.getElementById('item').innerHTML = html;
            })

        return result; 
    }
)

export const deleteUserById = createAsyncThunk('book/deleteUserById', async (params, thunkAPI) => {
    const list = await axios.delete(`http://localhost:3000/books/${params?.id}`);
    thunkAPI.dispatch(getBook());
    return list;
});

export const bookSlice = createSlice({
    name: 'book',   
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        removeBook: (state, action) => {
            const index = state.books.findIndex((book) => book.id === action.payload.id);
            if (index !== -1) {
                state.books.splice(index, 1);
            }
        },
        editBook: (state, action) => {
            state.books.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBook.fulfilled, (state, action) => {
            console.log({state, action});
        })
    }
})

// Action creators are generated for each case reducer function
export const { addBook , removeBook, editBook} = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer