import { configureStore } from "@reduxjs/toolkit";
import Todo_Slice from "./Reducer/Todo_Slice";

 const Store = configureStore({
    reducer:{
        todos : Todo_Slice
    },
})

export default Store