import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: '',
    status: false,
    items:0,
    alarma: false,
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
        openAlarma: (state)=>{
            state.alarma = true;
        },
        closeAlarma:(state)=>{
            state.alarma = false;
        },

    }
})

export const { 
    openCart, 
    closeCart, 
    createCartId, 
    sumarItem, 
    restarItem, 
    openAlarma, 
    closeAlarma
    
} = cartSlice.actions;


export default cartSlice.reducer;