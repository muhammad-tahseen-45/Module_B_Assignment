

import Loginpage from '../pages/Loginpage'


import { useSelector } from 'react-redux'



function Protective_route(props) {
   const state = useSelector((e)=>e.islogin.islogin)
  console.log(state)
   
//  return <>
//   <h1>protective route</h1>
//  </>

 

 
   
  
 if(state === true){
 return <props.Component/>
    
    
    
  
 }
 else{
    return  <Loginpage/>
 }
 
  
         
 
}

export default Protective_route