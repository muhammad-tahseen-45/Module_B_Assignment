import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Send_data_add_to_card } from '../Reducer/Product_slice';

export default function Product_card_com(props) {
  const { object_for_card, catogry, image, title, price, description, id } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();



  return (
    <Card sx={{   borderRadius: "15px", overflow: "hidden" }}>
      <CardMedia sx={{  marginTop:"10px", position: "relative", paddingTop: "100%", overflow: "hidden", width: "100%", height: "auto" }}>
        <img src={image} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", maxWidth: "80%", maxHeight: "100%", width: "auto", height: "auto" }} alt="" />
      </CardMedia>
      <CardContent>
        <Typography variant="h6" color="text.secondary" className='text-center'>
          Price: {price}
        </Typography>
        <Typography   variant="body2" color="text.secondary" className='text-center  overflow-hidden h-20'>
          {description}
        </Typography>
      </CardContent>
      <CardActions className='d-flex justify-center bg-yellow-700'>
        <Button size="small" style={{ color: "white" }} onClick={() => dispatch(Send_data_add_to_card(object_for_card))}>Add to Cart</Button>
      </CardActions>
    </Card>

  );
}