import { configureStore } from "@reduxjs/toolkit";
import Product_slice from "./Reducer/Product_slice";



 const Store = configureStore({
    reducer:{
        Api_data : Product_slice
    },
})

export default Store