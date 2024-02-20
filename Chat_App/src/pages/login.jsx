import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth } from "../config/firebase";
import {  useNavigate } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";

function Login() {
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const login_handle = () => {
        signInWithPopup(auth, provider).then(() => {
            console.log("Successfully logged in");
            navigate('chat');
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <Container sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box>
                <Button onClick={login_handle} variant="outlined">Login</Button>
            </Box>
        </Container>
    );
}

export default Login;
