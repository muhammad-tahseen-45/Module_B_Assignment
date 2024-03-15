import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Container } from '@mui/material';
import Login_comp from '../component/Login_com';





export default function     Login() {
 

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 350,
                    },
                }}
            >

                <Paper>
                 
                 <Login_comp/>
             

                </Paper>




            </Box>
        </Container>
    );
}