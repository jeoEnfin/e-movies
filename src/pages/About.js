import React from 'react'


import { useParams } from 'react-router-dom'
import AboutList from '../components/AboutList/AboutList';

function About() {
    const param = useParams()
    const url = `?apikey=97b9ab9&s=${param.movieId}`
  return (
    <div>
        <main>
            <h1>{param.movieId}</h1>
            <AboutList url={url}/>  
        </main>
    </div>
  )
}

export default About