import React from 'react'
import SavedShows from '../../Components/SavedShows'
import "./Account.css"

const Account = () => {

  return (
    <>
        <div className='account-container'>
        <img className='bg-banner-img' src="https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/2e1414e3-cdae-473f-af07-31f9b74741f6/IN-en-20230130-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='gradient-black'></div>
        <p className='myshows'>My Shows</p>
        <div className="saved-movies">
        <SavedShows />
        </div>
      </div>
    </>
  )
}

export default Account