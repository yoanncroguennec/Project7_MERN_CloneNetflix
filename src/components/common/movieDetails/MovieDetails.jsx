import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { Box, Modal, Button, Typography, styled } from "@mui/material";
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import Navbar from "@/components/layouts/navbar/Navbar";
import { baseUrl } from "@/utils/constants/Constants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 500,
  background: "rgba(0, 0, 0, 0.6)",
  borderRadius: "25px",
  // bgcolor: 'background.paper',
  color: "#FFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// STYLES
const RootFeatured = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100vh",
  position: "relative",
  zIndex: 15,
  [theme.breakpoints.down("sm")]: {
    // background: "red",
  },
}));

const BoxCategory = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "80px",
  left: "50px",
  fontSize: "20px",
  fontWeight: "500",
  color: "#FFF",
  display: "flex",
  alignItems: "center",
}));

const BoxBG_Movie = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100vw",
  position: "absolute",
  zIndex: "-10",
  top: 0,
  left: 0,
}));

const BoxTitleDescMovie = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.4)",
  borderRadius: "25px",
  padding: "50px",
  marginLeft: "150px",
  width: "700px",
}));

const TypoMovie = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #000, 3px 3px 5px blue",
}));

const TypoDesc = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  textAlign: "justify",
}));

export default function MovieDetails({
  movie,
  showPlayer,
  setShowPlayer,
  trailerURL,
}) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const [trailer, setTrailer] = useState("");

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  function openModalAndPlayVideo() {
    setOpen(true);
    setShowPlayer(true);
  }

  function closeModalAndStopVideo() {
    setOpen(false);
    setShowPlayer(false);
  }

  return (
    <>
      <Navbar />

      <RootFeatured>
        <BoxBG_Movie>
          <Image
            fill
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            className='object-cover'
            alt='movie poster'
          />
        </BoxBG_Movie>
        <BoxTitleDescMovie>
          <TypoMovie variant='h2'>
            {movie?.title || movie?.name || movie?.original_name}
          </TypoMovie>
          <TypoDesc>{truncate(`${movie?.overview}`, 500)}</TypoDesc>
          <div>
            <div>
              <Button variant='contained' onClick={openModalAndPlayVideo}>
                <BsFillPlayFill />
                <Typography>Lecture</Typography>
              </Button>
              <button className='more'>
                <BsInfoCircle />
                <span>Info</span>
              </button>
            </div>
          </div>
        </BoxTitleDescMovie>
      </RootFeatured>

      {/* MODAL PLAYER */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div style={{}}>
            <Typography align='center' variant='h4'>
              Bande-Annonce
            </Typography>
            <AiOutlineClose
              color='#FF0000'
              onClick={closeModalAndStopVideo}
              size={35}
              style={{
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
          </div>
          <div style={{ height: "85%" }}>
            <ReactPlayer
              url={trailerURL}
              width='100%'
              height='100%'
              controls={true}
              playing={showPlayer}
            />
          </div>
        </Box>
      </Modal>
    </>
  );
}
