import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status:false,
    searchParams: '',
}


export const searchSlice = createSlice({
    name: "searchBar",
    initialState,
    reducers: {
        showSearchBar: (state)=>{
            state.status = true;        
        },
        closeSearchBar: (state)=>{
            state.status = false;
        },
        setSearchParams:(state, payload)=>{
            state.searchParams = payload.payload
        }
    }
})
export const { showSearchBar, closeSearchBar, setSearchParams } = searchSlice.actions;

export default searchSlice.reducer; 