import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function P_detail_comp(props) {
  const {catogary,image,title,description,price} =props
 
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       component={"image"}
        sx={{ height: 140 }}
        image={image}
        title= {catogary}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0,10)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price}</Button>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}