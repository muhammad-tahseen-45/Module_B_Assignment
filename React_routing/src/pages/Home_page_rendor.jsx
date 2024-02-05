import React from 'react'
import { products_Data } from '../Components/Products_Data'
import Card_component from '../Components/Card_components';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/material';













function Home_page_rendor() {



  console.log(products_Data.length)
  return (
    <>
      <Container>
        <Grid container spacing={{ xs: 2, md: 15 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            products_Data.map((curr, index) => {
              return <Grid item xs={2} sm={4} md={4} key={index}>
                < Card_component Description={curr.description} cate={curr.category} key={index} title={curr.title} images={curr.image} price={curr.price} Product_id={curr.id} />

              </Grid>



            })
          }
        </Grid>
      </Container>















    </>
  )
}
export default Home_page_rendor
