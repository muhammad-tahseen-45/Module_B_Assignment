import React from 'react'
import App_Bar_component from './Components/App_Bar_component'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div  style={{marginBottom:"100px"}} >
      <App_Bar_component  />
    
      </div>
      <div>
      <Outlet/>
      </div>

    </>
  )
}

export default Layout