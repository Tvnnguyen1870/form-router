import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    articles: [],
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addArticle: (state, action) => {
            state.articles.push(action.payload)
        },
        removeArticle: (state, action) => {
            state.articles.pop(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addArticle, removeArticle } = articleSlice.actions;

const articleReducer = articleSlice.reducer;

export default articleReducer