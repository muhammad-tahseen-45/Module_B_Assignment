
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
        //  const [value , id] = action.payload
         state.todos = state.todos.map((todo)=>{
          return todo.id == action.payload.id ? {...todo , value : action.payload.value} :todo

         })
        
        })

   }
})


export const {Add_todo,remove_todo,ubdate_todo} =Todo_slice.actions
export  default Todo_slice.reducer 
