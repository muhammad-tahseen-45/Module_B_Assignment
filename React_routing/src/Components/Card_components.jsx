import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';







// navigate function 






export default function Card_component(props) {
  const navigate = useNavigate()
  const Navigate_handle = (P_id) => {
    console.log("hiiii")
    console.log(P_id)
    navigate(`/detail/${P_id}`)


  }


  return (
    <>


      {/* <Container maxWidth="large" > */}

        <Grid container rowSpacing={1} columnSpacing={{ xs: 4, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345, }}>
              <CardMedia
                component="img"
                sx={{ height: "100%" }}
                image={props.images}
              // title={props.title}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {props.Description}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "center" }}  >
                <Button size="small"> {props.price} </Button>
                <Button size="small">{props.cate}</Button>


              </CardActions>
              <CardContent>
                <Box sx={{ '& button': { m: 1 } }}>
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <Button variant="outlined" size="large">
                      <p onClick={() => Navigate_handle(props.Product_id)} >SHOW DETAIL</p>
                    </Button>

                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      {/* </Container> */}



    </>


















  );
}


// import React from 'react'

// export default function (props) {
//   return (
//     <div>
//       <h1>hiiiiiiiiiiiiii</h1>
//     </div>
//   )
// }
