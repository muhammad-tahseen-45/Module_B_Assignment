import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function Product_card_com(props) {
  const {catogry,image,title,price,description,id} = props
  const navigate = useNavigate()
  const Show_detail_Handle =(id)=>{
    navigate(`detail/${id}`)
    // navigate("detail")
 }

 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ 
          width :"100%" }}
        image={image}
        title={catogry}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {catogry}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price}</Button>
        <Button size="small">{title}</Button>
      </CardActions>
      <Button onClick={()=>Show_detail_Handle(id)} >Show Detail</Button>
    </Card>
  );
}