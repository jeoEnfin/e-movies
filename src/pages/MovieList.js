import React from 'react'
import Banner from '../components/Banner/Banner'
import RowPost from '../components/RowPost/RowPost'
import { movies } from '../urls'

function MovieList() {
  return (
    <div>
        <Banner url={'?apikey=97b9ab9&t=movies'}/>
        <RowPost title='Populer' url={movies} />
    </div>
  )
}

export default MovieList