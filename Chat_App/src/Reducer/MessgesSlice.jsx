
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messeges_arry: [

    ]

}

const MessgesSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        Addmesseg: (state, actions) => {
            state.messeges_arry = actions.payload


        },
        delet_messeges: (state, actions) => {
            const messeg_id = actions.payload
            state.messeges_arry = state.messeges_arry.filter((message) => {
                return  message.key !== messeg_id; 
              });
            console.log(messeg_id)
        },
        update_messeges: (state, action) => {
            // const updatedMessage = action.payload;
            // state.messeges_arry = state.messeges_arry.map(message => {
            //     if (message.key === updatedMessage.key) {
            //         return { ...message, messege: "yasmeen" }; // Message ko update kar rahe hain
            //     }
            //     return message;
            // });
        }
    }})


export const { Addmesseg, delet_messeges,update_messeges } = MessgesSlice.actions
export default MessgesSlice.reducer 
