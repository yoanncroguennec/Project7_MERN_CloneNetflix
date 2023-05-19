import { useState } from "react";
import {
  Box,
  styled,
} from "@mui/material";
// NEXT-AUTH
import { getSession, useSession } from "next-auth/react";
// UTILS CONSTANTS
import Login from "../login";
// ICONS
import { BoxBGMovie_And_BoxTitleDescMovie, ModalInfosMovie, ModalPlayerTrailer } from "@/components/common";


//////////////////// EXPORT FUNCTION ////////////////////
export default function MovieDetail ({ movie }) {
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

  //////////////////// OPEN MODAL INFOS MOVIE ////////////////////
  const [openModalInfosMovie, setOpenModalInfosMovie] = useState(false);

  function CloseModalInfosMovie() {
    setOpenModalInfosMovie(false);
  }

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

  //////////////////// SESSION AUTH ////////////////////
  const { data: session } = useSession();
  if (!session) return <Login />;

  //////////////////// TRAILER URL ////////////////////
  const trailerIndex = movie.videos.results.findIndex(
    (element) => element.type === "Trailer"
  );

  const urlTrailerVideo = `https://www.youtube.com/watch?v=${movie.videos?.results[trailerIndex]?.key}`;

  return (
    <>
      <RootFeatured>
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
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=fr-FR&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      session,
      movie: request,
    },
  };
}

