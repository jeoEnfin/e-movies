import React,{useEffect,useState} from 'react'
import classes from './Banner.module.css'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom';


function Banner(props) {
    const [movies,setMovies] = useState();
    useEffect(() => {
        axios.get(props.url).then((response) =>{
           //console.log(response.data.Plot );
           setMovies(response.data);
        })
    },[])

    const navigate = useNavigate();

    const myListHandler =()=>{
        navigate('/mylist');
    }

    const playHandler =()=>{
        navigate(`/about/${movies.Title}`)
    }


  return (
    <div 
   style={{backgroundImage: `url(${movies? movies.Poster : ''}`}}
    className={classes.banner}>
        <div className={classes.bannerText}>
            <h1 className={classes.bannerTextTitle}>{movies ? movies.Title : 'title'}</h1>
            <div className={classes['banner_buttons']}>
                <button onClick={playHandler} className={classes.button}>Play</button>
                <button onClick={myListHandler} className={classes.button}>My list</button>
            </div>
            {/* <h1 className={classes.description}>{movies.Plot ? movies.Plot : 'Nothing'}</h1> */}
        </div>
        <div className={classes['fade_bottom']}></div>
    </div>
  )
}

export default Banner