
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messeges_arry: [

    ],
    check_user : false

}

const MessgesSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        Adddata: (state, actions) => {
       state.messeges_arry.push(actions.payload)


        },
       
       
    }})


export const { Adddata} = MessgesSlice.actions
export default MessgesSlice.reducer 
