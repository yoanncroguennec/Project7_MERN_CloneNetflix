import React, { useState, useEffect } from "react";
import {
  Box,
  styled,
} from "@mui/material";
// COMMONS COMPONENTS
import {
  BoxBGMovie_And_BoxTitleDescMovie,
  DropDownCategories,
  ModalInfosMovie,
  ModalPlayerTrailer,
} from "../..";

//////////////////// EXPORT FUNCTION ////////////////////
export default function Featured({ moviePosters, type }) {
  //////////////////// STYLES FEATURED ////////////////////
  const RootFeatured = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    position: "relative",
    zIndex: 15,
    [theme.breakpoints.down("sm")]: {},
  }));

  //////////////////// FETCH DATA MOVIES + INFOS ////////////////////
  const [movie, setMovie] = useState(null);
  const [urlTrailerVideo, setUrlTrailerVideo] = useState("");

  useEffect(() => {
    const mov = moviePosters[Math.floor(Math.random() * moviePosters.length)];
    // console.log(mov);

    fetch(
      `https://api.themoviedb.org/3/movie/${mov.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`data : `, data);

        const trailerIndex = data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );

        const trailerURL = `https://www.youtube.com/watch?v=${data.videos?.results[trailerIndex]?.key}`;
        setUrlTrailerVideo(trailerURL);
      });

    setMovie(mov);
  }, [moviePosters]);

  //////////////////// OPEN MODAL PLAYER TRAILER////////////////////
  const [openModalTrailer, setOpenModalTrailer] = useState(false);
  const [showPlayerTrailer, setShowPlayerTrailer] = useState(false);

  function OpenModalTrailer() {
    setOpenModalTrailer(true);
    setShowPlayerTrailer(true);
  }

  function CloseModalTrailer() {
    setOpenModalTrailer(false);
    setShowPlayerTrailer(false);
  }

  //////////////////// OPEN MODAL INFOS MOVIE ////////////////////
  const [openModalInfosMovie, setOpenModalInfosMovie] = useState(false);

  function CloseModalInfosMovie() {
    setOpenModalInfosMovie(false);
  }

  //////////////////// RETURN ////////////////////
  return (
    <>
      <RootFeatured>
        <DropDownCategories type={type} />
        <BoxBGMovie_And_BoxTitleDescMovie
          movie={movie}
          openModalInfosMovie={openModalInfosMovie}
          setOpenModalInfosMovie={setOpenModalInfosMovie}
          OpenModalTrailer={OpenModalTrailer}
        />
      </RootFeatured>

      {/* MODAL INFOS */}
      <ModalInfosMovie
        movie={movie}
        openModalInfosMovie={openModalInfosMovie}
        setOpenModalInfosMovie={setOpenModalInfosMovie}
        CloseModalInfosMovie={CloseModalInfosMovie}
        OpenModalTrailer={OpenModalTrailer}
      />

      {/* MODAL PLAYER TRAILER */}
      <ModalPlayerTrailer
        openModalTrailer={openModalTrailer}
        urlTrailerVideo={urlTrailerVideo}
        showPlayerTrailer={showPlayerTrailer}
        CloseModalTrailer={CloseModalTrailer}
      />
    </>
  );
}
