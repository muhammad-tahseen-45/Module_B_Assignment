import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products_Data } from './Products_Data'
import Show_Card_component from '../pages/Show_Card_Detail'


export default function Product_detail() {
    // const [showdetail,setdetail]=useState()
    const params = useParams()
    const filterr = products_Data.filter((current)=>{
          return      current.id == params.id 
    })
       
    console.log(params)
                
    
    // setdetail(filterr)
    
    console.log(filterr)

  return (
  <>
   {
     filterr.map((curr,index)=>{
        return <div  key={index}>
               <Show_Card_component  title={curr.title} price={curr.price} description={curr.description} cate={curr.category} images={curr.image}   />
        </div>
     })
   }
    
  </>
  )
}
