import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    islogin: false
}

const Nav_button_Slice = createSlice(
    {
        initialState,
        name: "islogin",
        reducers: {
            login: ((e) => {
                e.islogin = true
            }),
            logout: ((e) => {
                e.islogin = false;
            }),

        }

    }
    )
    
    
    
    

export  const {login,logout} = Nav_button_Slice.actions
export default Nav_button_Slice.reducer