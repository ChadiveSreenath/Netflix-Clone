import React, { useEffect, useState } from 'react'
import requests from '../../EndPoints'
import "./Main.css"

const Main = () => {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        fetch(requests.requestPopular).then((res) => res.json()).then((res) => setMovies(res.results))
    }, [])

    const trunCateStr = (str, num) => {
        if (str?.length > num) return str.slice(0, num) + "..."
        else return str
    }

    // console.log(movie?.overview)

    return (
       
        <div className='top-container'>

            <div className='image-container'>
                <div className='overlay'></div>
                <img className='featured-image' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.original_title} />
                <div className='information-banner'>
                    <h1 className='featured-title'>{movie?.title}</h1>
                    <div>
                        <button className='btn-play'>Play</button>
                        <button className='btn-play btn-later '>Watch Later</button>
                    </div>
                    <p className='featured-date'>Released : {movie?.release_date}</p>
                    <p className='featured-overview'>{trunCateStr(movie?.overview, 150)}</p>
                </div>
            </div>

        </div>
    )
}

export default Main