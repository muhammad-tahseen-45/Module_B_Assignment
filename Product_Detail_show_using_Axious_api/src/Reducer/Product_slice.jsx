
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    initial: [

    ]


}

const Product_slice = createSlice({
    name: "Sotre_Data",
    initialState,
    reducers: {
        get_api_data: (state,actions) => {
            state.initial = actions.payload


        },
       
       
       
    }})


export const {get_api_data} = Product_slice.actions
export default Product_slice.reducer 
