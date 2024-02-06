
import { Dashboard } from '@mui/icons-material'
import Order_list from './pages/Order_list'
import Orderdetail from './pages/Orderdetail'
import Costomer from './pages/Costomer'
import Anlytics from './pages/Anlytics'
import { Reviews } from '@mui/icons-material'
import Food from './pages/Food'
import FoodDetail from './pages/FoodDetail'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


import './App.css'
import Slidebar from './Componnet/Slidbar'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* <Route path='' element={<Slidebar />} /> */}
        <Route path='/' element={<Slidebar/>} >
          <Route path='' element={<Dashboard />} />
          <Route path='orderlist' element={<Order_list />} />
          <Route path='oderdetail' element={<Orderdetail />} />
          <Route path='Costomer' element={<Costomer />} />
          <Route path='Anlytics' element={<Anlytics />} />
          <Route path='Reviews' element={<Reviews />} />
          <Route path='Food' element={<Food />} />
          <Route path='fooddetail' element={<FoodDetail />} />
        </Route>


      </Route>





      //  <Route path='dashboard'  element={<Dashboard/>} />

    )
  )



  return (
    <>
      {/* <Slidebar/> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
