// Grid : Les largeurs de colonne sont des valeurs entières comprises entre 1 et 12 ; ils s'appliquent à n'importe quel point d'arrêt et indiquent le nombre de colonnes occupées par le composant.

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { parseCookies } from "nookies";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// NEXT AUTH
import { useSession } from "next-auth/react";
// NEXT
import { useRouter } from "next/router";

const theme = createTheme();


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const router = useRouter();

  const { data: session } = useSession();

  const cookies = parseCookies;

  useEffect(() => {
    if (session) {
      toast.success("Login Success");
      router.push("/");
    }

    if (cookies?.user) {
      router.push("/");
    }
  }, [session, cookies, router]);

  async function submitHandler(e) {
    e.preventDefault();
    console.log(email, password);

    try {
      if (password !== conPassword) {
        toast.error("Les mots de passes ne correspondent pas!");
        return;
      }

      const user = cookies?.user
        ? JSON.parse(cookies.user)
        : session?.user
        ? session?.user
        : "";

      console.log(email, password, firstName, lastName);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/user/register`,
        { email, password, firstName, lastName },
        config
      );

      toast.success(data?.message);
    } catch (error) {
      // console.log(error.response);
      toast.error(error.response.data.error);
    }
  }

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin='normal'
                  required
                  fullWidth
                  name='confirm password'
                  label='Confirm Password'
                  type='password'
                  id='confirm password'
                  autoComplete='current-password'
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                />
              </Grid>
            </Grid>


            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 2, mb: 2, backgroundColor: "secondary.main" }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
