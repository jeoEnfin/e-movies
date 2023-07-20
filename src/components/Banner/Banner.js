import React,{useEffect,useState} from 'react'
import classes from './Banner.module.css'
import axios from '../../axios'


function Banner() {
    const [movies,setMovies] = useState();
    useEffect(() => {
        axios.get('?apikey=97b9ab9&t=Game%20of%20Thrones&Season').then((response) =>{
            console.log(response.data );
           setMovies(response.data);
        })
    },[])
  return (
    <div 
   style={{backgroundImage: `url(${movies? movies.Poster : ''}`}}
    className={classes.banner}>
        <div className={classes.bannerText}>
            <h1 className={classes.bannerTextTitle}>{movies ? movies.Title : 'title'}</h1>
            <div className={classes['banner_buttons']}>
                <button className={classes.button}>Play</button>
                <button className={classes.button}>My list</button>
            </div>
            <h1 className={classes.description}>{movies.Plot}</h1>
        </div>
        <div className={classes['fade_bottom']}></div>
    </div>
  )
}

export default Banner