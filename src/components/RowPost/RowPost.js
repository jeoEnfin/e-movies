import React,{useEffect,useState} from 'react'
import classes from './RowPost.module.css'
import axios from '../../axios'

function RowPost() { 
    const [movies,setMovies] = useState([]);
    const [series,setSeries] = useState([]);
    useEffect(() => {
        axios.get('?apikey=97b9ab9&s=movies').then((response) =>{
            console.log(response.data.Search[0] );
           setMovies(response.data.Search);
        })
        axios.get('?apikey=97b9ab9&s=series').then((response) =>{
            console.log(response.data.Search[0] );
           setSeries(response.data.Search);
        })
    },[])
  return (
    <div>
    <div className={classes.row}>
        <h2>Movies</h2>
        <div className={classes.posters}>
            {movies.map((movie) => (
                <div className={classes.poster} key={movie.imdbID}>
                    <img sizes='contain' src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3></div>))}
        </div>
    </div>
    <div className={classes.row}>
        <h2>Series</h2>
        <div className={classes.posters}>
            {series.map((series) => (
                <div className={classes.poster} key={series.imdbID}>
                    <img src={series.Poster} alt={series.Title} />
                    <h3>{series.Title}</h3></div>))}
        </div>
    </div>

    </div>
  )
}

export default RowPost