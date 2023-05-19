import { Box, styled } from "@mui/material";
// PAGES LIST MOVIES BY CATEGORIES
import ListMovies from "./listMovies/ListMovies";
// UTILS API
import requests from "@/utils/api/Requests";

//////////////////// STYLES ////////////////////
const BoxListMovies = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  margin: "85px 0",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
  },
}));

//////////////////// EXPORT FUNCTION ////////////////////
export default function TrendingNow({ documentaries }) {
  return (
    <BoxListMovies>
      {documentaries
        // sortByAlphabeticalOrder
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        ?.map((movie) => (
          <ListMovies key={movie.id} movie={movie} />
        ))}
    </BoxListMovies>
  );
}

export async function getServerSideProps() {
  const [documentaries] = await Promise.all([
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      // session,
      documentaries: documentaries.results,
    },
  };
}
