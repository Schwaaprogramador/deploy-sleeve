import {configureStore} from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice.js";
import cartSlice  from "./cartSlice.js";
import productSlice from "./productSlice.js";


const store = configureStore({
    
    reducer:{
        navbarStatus: navbarSlice,
        cart: cartSlice,
        product: productSlice,
    }
})


export default store;