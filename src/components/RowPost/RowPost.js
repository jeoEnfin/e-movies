import React, { useEffect, useState } from 'react'
import classes from './RowPost.module.css'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom';

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
   
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.Search);
            setMovies(response.data.Search);
        })
    }, [])

    const rowButtonHandler = (id) => {
       navigate(`/about/${id}`) 
    }

    return (
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.posters}>
                {movies.map((movie) => (
                    <div className={props.isSmall ? classes.smallPoster :classes.poster} key={movie.imdbID}>
                        <img onClick={()=>rowButtonHandler(movie.Title)} sizes='cover' src={movie.Poster} alt={movie.Title} />
                      </div>))}
            </div>
       
        </div>
    )
}

export default RowPost