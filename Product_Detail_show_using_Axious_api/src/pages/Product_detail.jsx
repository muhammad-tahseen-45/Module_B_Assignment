import React from 'react'
import { useParams } from 'react-router-dom'

function Product_detail() {
    const Params = useParams()
    console.log(Params.id)
  return (
    <div>Product_detail</div>
  )
}

export default Product_detail