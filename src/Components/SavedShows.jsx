import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../Context/AuthContext'
import { db } from "../firebase"
import { updateDoc, doc, onSnapshot } from "firebase/firestore"
import { AiOutlineClose } from "react-icons/ai"

const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()
    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedMovie)
        })
    }, [user?.email])

    const slideLeft = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const movieRef = doc(db, "users", `${user?.email}`)
    const deleteMovie = async (passedId) => {
        try {
            const result = movies.filter((item) => item.id !== passedId)
            await updateDoc(movieRef, {
                savedMovie: result
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='movies-type'>
            <MdChevronLeft size={40} className="next-icon" onClick={() => slideLeft()} />
            <div className='slider' id='slider'>
                {
                    movies?.map((item, id) => (
                        <div className='row-images' key={id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                            <div className="hover-effect">
                                <p className='row-title'>{item?.title}</p>
                                <p className='delete-icon' onClick={() => deleteMovie(item.id)}><AiOutlineClose /></p>
                            </div>
                        </div>
                    ))}
            </div>
            <MdChevronRight size={40} className="next-icon" onClick={() => slideRight()} />
        </div>

    )
}

export default SavedShows