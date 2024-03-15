import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

  RouterProvider,

} from "react-router-dom";



import Login from '../pages/login';
import BasicFormControl from '../component/Sginup_comp';

import Donate_regester from '../component/Donate_regester';
import Layout from '../component/Layout';
import AnotherComponent from '../pages/rendor_data_for_donation';
import Private_route from './Private_route';











const router = createBrowserRouter(
  createRoutesFromElements(



    <Route>
    
      <Route   >
         <Route   >

         </Route>
         
        <Route path='login'  element={<Login/> }/>
       <Route path='sginup'  element={<BasicFormControl/>} />
       <Route path='/'  element={<Private_route  component={Layout} />} />

       <Route path='donate_reg'  element={<Donate_regester/>} />
       <Route path='cards'  element={<AnotherComponent/>} />
     
        
       
      
       


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