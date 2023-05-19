import { Box, Typography, styled } from "@mui/material";
// NEXT
import Link from "next/link";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Notfound() {
  //////////////////// STYLES ////////////////////
  const RootNotfound = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "80px",
    minHeight: "80vh",
    [theme.breakpoints.down("sm")]: {},
  }));

  const styleLink = {
    color: "#000",
    textDecoration: "none",
  }

  //////////////////// RETURN ////////////////////
  return (
    <RootNotfound>
      <Typography variant='h5'>Page Introuvable</Typography>
      <Link href='/' style={styleLink}>
        <Typography variant='h5'>Retour à l&apos;accueil</Typography>
      </Link>
    </RootNotfound>
  );
}
