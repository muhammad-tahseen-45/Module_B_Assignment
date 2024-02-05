import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Show_Card_component(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={props.images}
        // title={prop}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.price}</Button>
        <Button size="small">{props.cate}</Button>
      </CardActions>
      <CardContent>
      <Box sx={{ '& button': { m: 1 } }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Button    variant="outlined" size="large">
             <Link to={"/"} >
                BACK HOME
             </Link>
            </Button>

                
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}