import React, { useState } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";

import App_Bar_component from '../Components/App_Bar_component';
import Protective_route from './Protective_route';
import Home_page_rendor from '../pages/Home_page_rendor';
import Loginpage from '../pages/Loginpage'
import Contact from '../pages/Contact';
import Show_Card_component from '../pages/Show_Card_Detail';




 


 

const router = createBrowserRouter( 
  createRoutesFromElements(
      

      <Route>
        <Route path=''  element={<Loginpage/>}  />
        <Route path='detail/:id'  element={<Show_Card_component/>}  />
          <Route path='home'  element={<Protective_route  Component={Home_page_rendor}  />}  />
          <Route path='contact'  element={<Protective_route  Component={Contact}  />}  />
        
      </Route>
    
         
    )
)


export default function Routing() {


  return (
  <>
   <App_Bar_component  />
  <RouterProvider router={router}/>
  </>
  )
}