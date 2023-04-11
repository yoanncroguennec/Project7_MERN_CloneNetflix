import React from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  Box,
  TextField,
  Grid,
  Button,
} from "@mui/material";
// NEXT
import Link from "next/link";
// NEXT AUTH
import { signIn } from "next-auth/react";
// ICONS
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


const sizeIcon = 32

const connectionSocialNetworks = [
  {
    icon: <FcGoogle size={sizeIcon} />,
    text: "Google",
    url: "google",
  },
  {
    icon: <BsFacebook color='blue' size={sizeIcon} />,
    text: "Facebook",
    url: "facebook",
  },
  {
    icon: <BsGithub size={sizeIcon} />,
    text: "Github",
    url: "github",
  },
];


export default function Login() {
  
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component='h1' variant='h5'>
          Se Connecter
        </Typography>
        <Box component='form' noValidate sx={{ mt: 1 }}>
          {connectionSocialNetworks.map(({ icon, text, url }) => (
            <Grid
              container
              sx={{
                mt: 2,
                mb: 2,
                pl: 2,
                pt: 1,
                pb: 1,
                border: 1,
                borderRadius: 25,
                borderColor: "grey.400",
              }}
              onClick={() => signIn(`${url}`)}
            >
              <div style={{ marginRight: "10px" }}>{icon}</div>
              <Typography>Se connecter avec {text} </Typography>
            </Grid>
          ))}

          <Grid container>
            <Grid item>
              <Link href='/register' variant='body2'>
                {"Vous n'avez pas de compte ? S'inscrire"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
