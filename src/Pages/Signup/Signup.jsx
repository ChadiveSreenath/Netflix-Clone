import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Signup.css"
import { UserAuth } from "../../Context/AuthContext"


const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const { user, signUp } = UserAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await signUp(email, password)
      navigate("/")
    }
    catch (error) {
      console.log(error)
    }

  }


  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <img className='bg-banner' src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      <div className="gradient"></div>
      <div className='bg-overlay'>
        <div className='bg-form'>
          <div className="form-tags">
            <h1 style={{ fontStyle: "bold" }}>Sign Up</h1>
            <form onSubmit={handleSubmit} >
              <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
              <button className='signup'>Sign Up</button>
              <div style={{ display: "flex", justifyContent: "space-between", color: "gray" }}>
                <p><input type="checkbox" />&nbsp;Remember me</p>
                <p>Need Help?</p>
              </div>
              <p><span style={{ color: "gray" }}>Already Subscribed To Netflix?</span><Link to="./login" style={{ textDecoration: 'none', color: "white " }} >{" "}&nbsp;Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup