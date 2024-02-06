import React, { useState } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";


import Protective_route from './Protective_route';
import Home_page_rendor from '../pages/Home_page_rendor';
import Loginpage from '../pages/Loginpage'
import Contact from '../pages/Contact';
import Show_Card_component from '../pages/Show_Card_Detail';
import Layout from '../Layout';
import Product_detail from '../Components/Product_detail';









const router = createBrowserRouter(
  createRoutesFromElements(



    <Route>
    
      <Route  path='/' element={<Layout />} >
       
        <Route path='' element={<Loginpage />} />
        <Route path='detail/:id' element={<Product_detail />} />
         <Route path='home' element={<Protective_route Component={Home_page_rendor} />} />
         <Route path='contact' element={<Protective_route Component={Contact} />} />
        {/* <Route path='contact' element={<Protective_route  />} />  */}


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