
import { createSlice } from "@reduxjs/toolkit";
  
const  initialState ={
    todos : [
        {
            id:1,
            name:"yasaeen"
        }
    ]
}
 
const Todo_slice = createSlice({
    name : "todos",
    initialState,
    reducers :{
        Add_todo:((state,action)=>{
            state.todos = action.payload 
            // add.todos.push(action.payload)
            state.todos.push(action.payload)
            // console.log(action.payload)
            


        })
    }

})


export const {Add_todo} =Todo_slice.actions
export  default Todo_slice.reducer 
