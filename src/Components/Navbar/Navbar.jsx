import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';


const Navbar = () => {

    const history = useNavigate()
    const navigate = useNavigate()
    const handleClick = () => {
        history('/');
    }

    const { user, logOut } = UserAuth()

    const handleLogout = async () => {
        try {
            await logOut()
            window.location.reload(false);
            navigate('/')
        }
        catch (error) {
            console.log(error)
        }
    }

    // console.log(user.email)

    return (
        <div className='container'>
            <button style={{ background: "none", cursor: "pointer" }} onClick={handleClick}><h1 className='icon'>Netflix</h1></button>
            {
                user?.email ? <div>
                    <Link to="/Account" >
                        <button className='sign-in'>Account</button>
                    </Link>
                    <button className='sign-up' onClick={handleLogout}>Logout</button>
                </div>
                    :
                    <div>
                        <Link to="/login" >
                            <button className='sign-in'>Sign In</button>
                        </Link>
                        <Link to="signup" >
                            <button className='sign-up'>Sign Up</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Navbar