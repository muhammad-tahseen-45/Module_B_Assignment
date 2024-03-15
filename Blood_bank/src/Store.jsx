import { configureStore } from "@reduxjs/toolkit";
import MessgesSlice from "./Reducer/MessgesSlice";


 const Store = configureStore({
    reducer:{
        messeges : MessgesSlice
    },
})

export default Store