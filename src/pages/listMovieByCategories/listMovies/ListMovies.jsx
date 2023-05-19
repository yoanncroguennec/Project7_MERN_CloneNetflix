import {
  Box,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// NEXT
import Image from "next/image";
import Link from "next/link";
// UTILS CONSTANTS
import { baseUrlImg } from "@/utils/constants/Constants";


//////////////////// EXPORT FUNCTION ////////////////////
export default function ListMovies({ movie }) {
  console.log(movie);
  //////////////////// STYLES ////////////////////
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const styleLink = {
    color: "#000",
    cursor: "pointer",
    textDecoration: "none",
  };

  const RootListMovies = styled(Box)(({ theme }) => ({
    background: "#f1f1f1",
    borderRadius: "10px",
    boxShadow: "5px 5px 15px rgba(0,0,0,0.3)",
    margin: "0 auto",
    marginBottom: "45px",
    maxWidth: "600px",
    padding: "30px",
    width: "100%",
    "&::after": {
      content: "''",
      clear: "both",
      display: "block",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  }));

  const styleImg = {
    borderRadius: "50%",
    float: "left",
    height: `${matches ? "100px" : "200px"}`,
    margin: "0 20px 5px 0",
    objectFit: "cover",
    shapeOutside: "margin-box",
    width: `${matches ? "100px" : "200px"}`,
  };

  const TypoTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    textAlign: "center",
  }));

  const BoxNoDescription = styled(Box)(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    margin: "25px",
  }));

  //////////////////// RETURN ////////////////////
  return (
    <Link href={`/movie/${movie?.id}`} style={styleLink}>
      <RootListMovies>
        <Image
          alt=""
          height={750}
          src={`${baseUrlImg}${movie?.backdrop_path || movie?.poster_path}`}
          style={styleImg}
          width={750}
        />
        <TypoTitle variant={matches ? "h6" : "h5"}>
          {movie?.title || movie?.name || movie?.original_name}
        </TypoTitle>
        {movie?.overview === "" && (
          <BoxNoDescription>
            <Typography variant='h6'> Pas de description</Typography>
          </BoxNoDescription>
        )}
        <Typography>{movie?.overview}</Typography>
      </RootListMovies>
    </Link>
  );
}
