import React from 'react'
import Product_data_compponenet from '../component/Product_data_compponenet'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <> 
          <Link to={"add"} > <Button>all products</Button></Link>
       <Product_data_compponenet/>
    </>
  )
}

export default Home