import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

  RouterProvider,

} from "react-router-dom";



import Login from '../pages/login';
import Todo from '../component/Todo';









const router = createBrowserRouter(
  createRoutesFromElements(



    <Route>
    
      <Route   >
        <Route path='/'  element={<Login/> }/>
        <Route path='chat'  element={<Todo/>}/>
       
      
       


      </Route>

    </Route>

  )
)


export default function Routing() {


  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}