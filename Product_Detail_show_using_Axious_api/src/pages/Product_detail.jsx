import React from 'react'

import P_detail from '../component/P_detail_comp'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

  
function Product_detail() {
  const Params = useParams()
  console.log(Params.id)
  const params = useParams()

  const selector = useSelector((e) => e.Api_data.initial)
  
  console.log(selector)
  const Filter_id = selector.filter((curr) => {
    return curr.id == params.id
  })
  console.log(Filter_id)

  return (
    <>
      {
        Filter_id.map((curr, index) => {


          return <P_detail key={index} price={curr.price} catogary={curr.catogery} image={curr.image} title={curr.title} description={curr.description} />

        })
      }
    </>
  )
}

export default Product_detail