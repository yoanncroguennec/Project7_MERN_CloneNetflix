// NEXT AUTH
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./login";
// UTILS API
import requests from "@/utils/api/Requests";
// COMMONS
import HomeNetflix from "@/components/common/home/HomeNetflix";



export default function Home({
  moviePosters,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  const { data: session } = useSession();
  if (session) {
    return (
      <HomeNetflix
        moviePosters={moviePosters}
        trendingNow={trendingNow}
        topRated={topRated}
        actionMovies={actionMovies}
        comedyMovies={comedyMovies}
        horrorMovies={horrorMovies}
        romanceMovies={romanceMovies}
        documentaries={documentaries}
      />
    );
  }
  return <Login />;
}


export async function getServerSideProps(context) {
  // const session = await getSession(context);

  const [
    moviePosters,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchMoviePosters).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      // session,

      moviePosters: moviePosters.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
