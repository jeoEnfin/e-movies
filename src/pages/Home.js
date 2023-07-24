import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Banner from '../components/Banner/Banner'
import RowPost from '../components/RowPost/RowPost'
import { movies, series } from '../urls'

function Home() {
    return (
        <div>
            <Banner url={'?apikey=97b9ab9&t=Batman v Superman: Dawn of Justice'} />
            <RowPost title='movies' url={movies} />
            <RowPost title='series' isSmall url={series} />
        </div>
    )
}

export default Home