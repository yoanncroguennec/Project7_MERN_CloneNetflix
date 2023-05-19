import { Box, styled } from "@mui/material";
// COMPONENTS
import { Featured, Row } from "../index";

//////////////////// STYLES ////////////////////
const RootHomeNetflix = styled(Box)(({ theme }) => ({
  background: "#000",
  paddingBottom: "100px",
  [theme.breakpoints.down("sm")]: {},
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function HomeNetflix({
  moviePosters,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  //////////////////// DATA ////////////////////
  const dataListRowMovies = [
    {
      title: "Tendance actuelle",
      movies: trendingNow,
      url: "/listMovieByCategories/trendingNow",
    },
    {
      title: "Mieux notée",
      movies: topRated,
      url: "/listMovieByCategories/topRated",
    },
    {
      title: "Action/Thrillers",
      movies: actionMovies,
      url: "/listMovieByCategories/actionMovies",
    },
    {
      title: "Comédies",
      movies: comedyMovies,
      url: "/listMovieByCategories/comedy",
    },
    {
      title: "Films d'horreur",
      movies: horrorMovies,
      url: "/listMovieByCategories/horror",
    },
    {
      title: "Films de romance",
      movies: romanceMovies,
      url: "/listMovieByCategories/romance",
    },
    {
      title: "Documentaires",
      movies: documentaries,
      url: "/listMovieByCategories/documentaries",
    },
  ];

  return (
    // {/* LIST ROWS */}
    <RootHomeNetflix>
      {/* FEATURED */}
      <Featured type='movie' moviePosters={moviePosters} />
      {dataListRowMovies?.map(({ title, movies, url }) => (
        <Row title={title} movies={movies} url={url} />
      ))}
    </RootHomeNetflix>
  );
}
