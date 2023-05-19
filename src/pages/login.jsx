import { Typography, Box, styled } from "@mui/material";
// NEXT AUTH
import { signIn } from "next-auth/react";
// UTILS DATAS
import { connectionSocialNetworks } from "@/utils/data/DataConnectionSocialNetworks";

//////////////////// STYLES ////////////////////
const RootLogin = styled(Box)(({ theme }) => ({
  alignItems: "center",
  backgroundImage: "url('/assets/imgs/bgLogin.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
  [theme.breakpoints.down("sm")]: {},
}));

const BoxLogin = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "25px",
  color: "#FFF",
  padding: "80px",
  textAlign: "center",
  width: "400px",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
}));

const BoxBtnLogin = styled(Box)(({ theme }) => ({
  alignItems: "center",
  border: "1px solid #FFF",
  borderRadius: "25px",
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  marginBottom: "15px",
  padding: "10px 50px 10px 50px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 5px 10px 5px",
  },
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function Login() {

  return (
    <RootLogin>
      <BoxLogin>
        <Typography component='h1' variant='h5'>
          Se Connecter
        </Typography>
        {connectionSocialNetworks.map(({ icon, text, url }) => (
          <BoxBtnLogin
            key={text}
            onClick={() => signIn(`${url}`)}
          >
            <div style={{ marginRight: "10px" }}>{icon}</div>
            <Typography>Avec {text} </Typography>
          </BoxBtnLogin>
        ))}
      </BoxLogin>
    </RootLogin>
  );
}
