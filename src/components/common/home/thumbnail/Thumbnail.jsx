import { Typography } from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";


  //////////////////// STYLES ////////////////////
  const styleLink = {
    color: "#FFF",
    cursor: "pointer",
    height: "150px",
    minWidth: "280px",
    overflowX: "hidden",
    position: "relative",
    textDecoration: "none",
    zIndex: 99,
  };

  const styleImg = {
    overflow: "hidden",
    zIndex: "-10",

    "&::hover": {
      width: "100%",
      webkitTransform: "scale(1.3)",
      transform: "scale(1.3)",
      transition: "1s ease-in-out",
      // -webkit-transform:scale(1.3);transform:scale(1.3)", -webkit-transition:"1s ease-in-out;transition:1s ease-in-out"
    },
  };
const Thumbnail = ({ movie }) => {
  // console.log(movie);
  return (
    <Link href={`/movie/${movie.id}`} style={styleLink}>
      <div style={{ overflow: 'hidden'}}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className='imgThumbnail'
          // className='rounded-sm object-cover md:rounded'
          fill
          alt='movie poster'
          style={styleImg}
        />
      </div>
      <Typography style={{ background: "rgba(0, 0, 0, 0.6" }}>
        {movie?.title || movie?.name || movie?.original_name}
      </Typography>
    </Link>
  );
};

export default Thumbnail;
