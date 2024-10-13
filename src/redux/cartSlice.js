import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: '',
    status: false,
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        openCart: (state)=>{
            state.status = true;
        },
        closeCart:(state)=>{
            state.status = false;
        },
        createCartId:(state, payload)=>{
            state.id = payload.payload;
        },

    }
})

export const { openCart, closeCart, createCartId } = cartSlice.actions;


export default cartSlice.reducer;