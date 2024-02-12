
import { createSlice } from "@reduxjs/toolkit";
  
const  initialState ={
    todos : [
        
    ]
}
 
const Todo_slice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        Add_todo: ((state, action) => {
            state.todos.push(action.payload)
          }),
        remove_todo: ((state, action) => {
            state.todos = state.todos.filter((curr) => {
                return  curr.id !== action.payload
            })
        }),
        
        ubdate_todo: ((state, action) => {
        
          const find =  state.todos.find((curr)=>{
              curr.id == action.payload.id
               
           })
           if(find){
             find.value === action.payload.value
           }
           

           
        })

   }
})


export const {Add_todo,remove_todo,ubdate_todo} =Todo_slice.actions
export  default Todo_slice.reducer 
