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
import Add_to_Card_comp from '../component/Add_to_card_comp';













const router = createBrowserRouter(
  createRoutesFromElements(



    <Route>

      <Route   >

     <Route path='/'  element={<Home/>} /> 
    
     <Route path='detail/:id'  element={<Product_detail/>} />
     <Route path='Add'  element={<Add_to_Card_comp/>} />






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