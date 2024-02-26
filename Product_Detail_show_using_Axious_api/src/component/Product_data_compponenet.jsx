import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_api_data } from '../Reducer/Product_slice'
import { Box } from '@mui/material'
import Product_card_com from './Product_card_com'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Grid'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


function Product_data_compponenet() {
    // const params = useParams()
    const dispatch = useDispatch()
    const selector = useSelector(e => e.Api_data.initial)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                dispatch(get_api_data(res.data))

            })



    }, [])




    return (
        <>
            
            <Container container   spacing={10} maxWidth={"md"}  style={{display:"flex", justifyContent:"center" }}>
            {
                selector.map((curr, index) => {
                       
                         
                              return   <Grid  key={index}item md={4} style={{marginBottom:"10px"}}>
                                     <Product_card_com catogry={curr.catogry} image={curr.image} id={curr.id} price={curr.price} title={curr.title.slice(0, 10)} description={curr.description.slice(0, 110)} />

                                </Grid>

                           
                        
                  
                })

            }
            </Container>
        </>
    )
}

export default Product_data_compponenet