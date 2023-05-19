import { Box, Modal, Typography, styled } from "@mui/material";
import ReactPlayer from "react-player";
// ICONS
import { AiOutlineClose } from "react-icons/ai";

//////////////////// STYLES MODAL PLAYER ////////////////////
const BoxModalPlayerTrailer = styled(Box)(({ theme }) => ({
  background: "rgba(0, 0, 0, 0.8)",
  border: "2px solid #000",
  borderRadius: "25px",
  boxShadow: 24,
  color: "#FFF",
  left: "50%",
  height: 500,
  p: 4,
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  [theme.breakpoints.down("sm")]: {
    width: 350,
  },
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function ModalPlayerTrailer({
  // Props
  openModalTrailer,
  showPlayerTrailer,
  urlTrailerVideo,
  // Functions
  CloseModalTrailer,
}) {
  return (
    <Modal
      open={openModalTrailer}
      onClose={CloseModalTrailer}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <BoxModalPlayerTrailer>
        <Typography align='center' variant='h4'>
          Bande-Annonce
        </Typography>
        <AiOutlineClose
          color='#FF0000'
          onClick={CloseModalTrailer}
          size={35}
          style={{
            cursor: "pointer",
            "&:hover": {
              color: "blue",
            },
          }}
        />
        <div style={{ height: "85%" }}>
          <ReactPlayer
            url={urlTrailerVideo}
            width='100%'
            height='100%'
            controls={true}
            playing={showPlayerTrailer}
          />
        </div>
      </BoxModalPlayerTrailer>
    </Modal>
  );
}
