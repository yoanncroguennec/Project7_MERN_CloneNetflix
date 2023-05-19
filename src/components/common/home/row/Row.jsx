import React, { useRef } from "react";
import { Typography, Container, styled, Box } from "@mui/material";
// NEXT
import Link from "next/link";
// COMPONENTS COMMONS
import Thumbnail from "../thumbnail/Thumbnail";
// ICONS
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

//////////////////// STYLES ////////////////////
const BoxRow = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {},
}));

const styleLink = {
  color: "#FFF",
  cursor: "pointer",
  textDecoration: "none",
};

const TypoTitleCategory = styled(Typography)(({ theme }) => ({
  fontWeight: "500",
  marginLeft: "50px",
}));

const styleBiChevronLeft = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "100%",
  left: 0,
  margin: "auto",
  position: "absolute",
  top: 0,
  width: "50px",
  zIndex: 150,
};

const BoxListMovies = styled(Box)(({ theme }) => ({
  alignItems: "center",
  display: "flex",
  marginLeft: "2px",
  overflow: "hidden",
  height: "100%",
}));

const styleBiChevronRight = {
  bottom: 0,
  backgroundColor: "rgb(22, 22, 22, 0.5)",
  color: "white",
  cursor: "pointer",
  height: "100%",
  margin: "auto",
  position: "absolute",
  right: 0,
  top: 0,
  width: "50px",
  zIndex: 150,
};

//////////////////// EXPORT FUNCTION ////////////////////
export default function Row({ title, movies, url }) {
  const rowRef = useRef(null);

  const handleClick = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <Container maxWidth='xl' sx={{ marginBottom: "60px" }}>
      <BoxRow>
        <Link href={url} style={styleLink}>
          <TypoTitleCategory variant='h5'>{title}</TypoTitleCategory>
        </Link>
        <div style={{ position: "relative" }}>
          <BiChevronLeft
            size={22}
            style={styleBiChevronLeft}
            onClick={() => handleClick("left")}
          />
          <BoxListMovies ref={rowRef}>
            {movies?.map((movie) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
          </BoxListMovies>
          <BiChevronRight
            style={styleBiChevronRight}
            onClick={() => handleClick("right")}
          />
        </div>
      </BoxRow>
    </Container>
  );
}
