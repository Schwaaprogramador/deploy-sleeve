import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id: '',
    productFilter:'',
    collectionValue:'',
};


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        ponerId: (state, payload)=>{
            
            state.id = payload.payload;
        },
        ponerFiltro: (state, payload)=>{
            state.productFilter = payload.payload;
        },
        ponerCollection:(state, payload)=>{
            state.collectionValue = payload.payload
        }
    }
})

export const { ponerId , ponerFiltro, ponerCollection } = productSlice.actions;


export default productSlice.reducer;