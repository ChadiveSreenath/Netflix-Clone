import React, { useEffect, useState } from 'react'
import Movie from '../Movie/Movie'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import "./Row.css"

const Row = ({ title, fetchUrl, id }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(fetchUrl).then((res) => res.json()).then((res) => setMovies(res.results))
    }, [fetchUrl])


    const slideLeft = () => {
        var slider = document.getElementById(`slider ${id}`)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById(`slider ${id}`)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='title'>{title}</h2>
            <div className='movies-type'>
                <MdChevronLeft size={40} className="next-icon" onClick={() => slideLeft()} />
                <div className='slider' id={`slider ${id}`}>
                    {
                        movies.map((item, id) => (
                            <Movie item={item} key={id} />
                        ))}
                </div>
                <MdChevronRight size={40} className="next-icon" onClick={() => slideRight()} />
            </div>
        </>
    )
}

export default Row