import Featured from '@/components/common/home/featured/Featured'
import Footer from '@/components/layouts/footer/Footer'
import React from 'react'
import Row from './row/Row'

export default function HomeNetflix({ moviePosters,   trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries, }) {
    return (
        <>
        <Featured type="movie" moviePosters={moviePosters} />
        
        <Row title="Tendance actuelle" movies={trendingNow} />
        <Row title="Mieux notée" movies={topRated} />
        <Row title="Action/Thrillers" movies={actionMovies} />
        <Row title="Comédies" movies={comedyMovies} />
        <Row title="Films d'horreur" movies={horrorMovies} />
        <Row title="Films de romance" movies={romanceMovies} />
        <Row title="Documentaires" movies={documentaries} />

        <Footer /> 
        </>
    )
}
