import { Typography, Container } from "@mui/material";
import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Thumbnail from "../thumbnail/Thumbnail";


const Row = ({ title, movies }) => {
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
    <Container maxWidth="xl" sx={{ marginBottom: "60px" }}>
      <div style={{ marginTop: "10px", width: "100%" }}>
        <Typography
          variant="h5"
          style={{ fontWeight: "500", marginLeft: "50px" }}
        >
          {title}
        </Typography>
        <div style={{ position: "relative" }}>
          <BiChevronLeft
            size={22}
            style={{
              width: "50px",
              height: "100%",
              backgroundColor: "rgb(22, 22, 22, 0.5)",
              color: "white",
              position: "absolute",
              zIndex: 99,
              top: 0,
              bottom: 0,
              margin: "auto",
              left: 0,
              cursor: "pointer",
            }}
            onClick={() => handleClick("left")}
          />
          <div
            style={{
              alignItems: "center",
              display: "flex",
              marginLeft: "2px",
              overflow: "hidden",
              overflowX: "hidden",
              height: "100%",
            }}
            ref={rowRef}
          >
            {movies?.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
          </div>
          <BiChevronRight
            style={{
              width: "50px",
              height: "100%",
              backgroundColor: "rgb(22, 22, 22, 0.5)",
              color: "white",
              position: "absolute",
              zIndex: 99,
              top: 0,
              bottom: 0,
              margin: "auto",
              right: 0,
              cursor: "pointer",
            }}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </Container>
  );
};

export default Row;
