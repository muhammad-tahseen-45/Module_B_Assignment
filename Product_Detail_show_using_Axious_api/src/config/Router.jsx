import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,

  RouterProvider,

} from "react-router-dom";
import Home from '../pages/Home';
// import Product_detail from '../pages/Product_detail';

import Product_detail from '../pages/Product_detail';













const router = createBrowserRouter(
  createRoutesFromElements(



    <Route>

      <Route   >

     <Route path='/'  element={<Home/>} /> 
    
     <Route path='detail/:id'  element={<Product_detail/>} />






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