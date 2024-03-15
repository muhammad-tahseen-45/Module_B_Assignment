import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { Container } from '@mui/material';

import BasicFormControl from '../component/Sginup_comp';


export default function Sginup() {
 

    return (
        <Container> 
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 400,
                        height: 450,
                    },
                }}
            >

                <Paper>
                   <BasicFormControl/>
                  
             

                </Paper>




            </Box>
        </Container>
    );
}