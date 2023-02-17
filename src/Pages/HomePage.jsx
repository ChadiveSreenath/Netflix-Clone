import React from 'react'
import Main from '../Components/Main/Main'
import Row from '../Components/Row/Row'
import requests from '../EndPoints'

const HomePage = () => {
  return (
    <div>

      <Main />
      <Row fetchUrl={requests.requestUpcoming} title="Up comming" id="Up comming" />
      <Row fetchUrl={requests.requestPopular} title="Popular" id="Popular" />
      <Row fetchUrl={requests.requestToprated} title="TopRated" id="TopRated" />
      <Row fetchUrl={requests.requestTrending} title="Trending" id="Trending" />
      <Row fetchUrl={requests.requestHorror} title="Horror" id="Horror" />
    </div>
  )
}

export default HomePage