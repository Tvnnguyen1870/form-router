import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct } = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer