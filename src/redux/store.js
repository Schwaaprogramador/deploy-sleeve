import {configureStore} from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice.js";
import cartSlice  from "./cartSlice.js";
import productSlice from "./productSlice.js";
import searchSlice  from "./searchSlice.js";


const store = configureStore({
    
    reducer:{
        navbarStatus: navbarSlice,
        cart: cartSlice,
        product: productSlice,
        searchBar: searchSlice,
    }
})


export default store;