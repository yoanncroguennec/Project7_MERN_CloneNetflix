import { useState, useEffect } from "react";
import { Box, Typography, styled } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";
// NEXT AUTH
import { useSession } from "next-auth/react";
// LAYOUTS
import DropdownNavbar from "../dropdown/DropdownNavbar";

export default function Navbar() {
  //////////////////// STYLES ////////////////////
  const RootNavbar = styled(Box)(({ theme }) => ({
    alignItems: "center",
    background:
      "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%)",
    color: "white",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "14px",
    height: " 100px",
    justifyContent: "space-between",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "999",
    [theme.breakpoints.down("sm")]: {},
  }));

  const styleImgLogo = {
    marginRight: "20px",
    width: "120px",
  };

  const styleLink = {
    color: "#FFF",
    cursor: "pointer",
    display: "flex",
    flexWrap: "nowrap",
    marginRight: "20px",
    marginLeft: "55px",
    textDecoration: "none",
    textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
  };

  const BoxDropdownNavbar = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    marginRight: "55px",
  }));

  //////////////////// USE SESSION ////////////////////
  const { data: session } = useSession();

  //////////////////// EFECT SCROLL NAVBAR ////////////////////
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  //////////////////// RETURN ////////////////////
  return (
    <RootNavbar>
      <Link href='/' style={styleLink}>
        <Image
          src='/assets/imgs/logoNetflix.png'
          alt='logoNetflix'
          height={120}
          width={120}
          style={styleImgLogo}
        />
        <Typography variant='h5' sx={{ fontWeight: "bold" }}>
          Accueil
        </Typography>
      </Link>
      {session?.user ? (
        <BoxDropdownNavbar>
          <DropdownNavbar />
        </BoxDropdownNavbar>
      ) : (
        ""
      )}
    </RootNavbar>
  );
}
