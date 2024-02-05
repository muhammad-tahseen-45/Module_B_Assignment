import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Input_compnents from '../Components/input_compnents';
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Button, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import { green } from '@mui/material/colors';
import { useState } from 'react';


export default function Paper_comp() {
 

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
                    <Input_compnents />
                  


                </Paper>




            </Box>
        </Container>
    );
}