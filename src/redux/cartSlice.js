import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: '',
    status: false,
    items:0,
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
        sumarItem:(state)=>{
            state.items += 1;
        },
        restarItem:(state)=>{
            state.items -= 1;
        },

    }
})

export const { openCart, closeCart, createCartId, sumarItem, restarItem } = cartSlice.actions;


export default cartSlice.reducer;