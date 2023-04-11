import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Thumbnail = ({ movie }) => {
  console.log(movie);
  return (
    <Link
      href={`/${movie.id}`}
      style={{
        position: "relative",
        cursor: "pointer",
        height: "150px",
        minWidth: "280px",
        overflowX: "hidden",
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        alt="movie poster"
        style={{ zIndex: "-10" }}
      />
      <Typography style={{ background: "rgba(0, 0, 0, 0.6"}}>
        {movie?.title || movie?.name || movie?.original_name}
      </Typography>
    </Link>
  );
};

export default Thumbnail;
