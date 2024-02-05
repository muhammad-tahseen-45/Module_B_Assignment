import React, { Children, useState } from 'react'
import Home_page_rendor from '../pages/Home_page_rendor'
import { Navigate } from 'react-router-dom'
import Loginpage from '../pages/Loginpage'
import State_componenet from '../Components/State_componenet'
import { EightK } from '@mui/icons-material'



function Protective_route(props) {
   console.log(props.Component)
   const [user,setuser] = useState(false)
 
 let chek = localStorage.getItem('user' )
 

 
   
  
 if(chek===true){
  return <props.Component/>
  
 }
 else{
   return  <Loginpage/>
 }

         
 
}

export default Protective_route