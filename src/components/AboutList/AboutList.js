import React, { useEffect, useState } from 'react'

import axios from '../../axios'
import classes from './AboutList.module.css'
import Youtube from 'react-youtube'

function AboutList(props) {
    const [movies, setMovies] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.Search);
            setMovies(response.data.Search);
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const rowButtonHandler = (id) => {
        console.log(id);
        setShow(!show);
    }



    return (  
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.posters}>
                {movies.map((movie) => (
                    <div>
                        <div className={props.isSmall ? classes.smallPoster : classes.poster} key={movie.imdbID}>
                            <img onClick={()=>rowButtonHandler(movie.Title)} sizes='cover' src={movie.Poster} alt={movie.Title} />

                        </div>
                        <div>
                            <h3>{movie.Title}</h3>
                            <p>{movie.Year}</p>
                            <p>{movie.Type}</p></div></div>))}
            </div>
            {show && <Youtube videoId="7-ESHG_ZSBs" opts={opts} />}
        </div>
    )
}

export default AboutList