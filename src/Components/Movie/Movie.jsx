import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { UserAuth } from "../../Context/AuthContext";
import { db } from '../../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const Movie = ({ item }) => {

    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();
    
    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
      if (user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
          savedMovie: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
      } else {
        alert('Please log in to save a movie');
      }
    };

    return (
        <div className='row-images'>
            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className="hover-effect">
                <p className='row-title'>{item?.title}</p>
                <p className="like-icon" onClick={saveShow}>
                    {
                        like ? <FaHeart /> : <FaRegHeart />
                    }
                </p>
            </div>
        </div>
    )
}

export default Movie