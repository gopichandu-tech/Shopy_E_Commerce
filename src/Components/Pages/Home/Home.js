import React from 'react'
import ImageSlider from '../../ImageSlider/ImageSlider'
import Trending from '../SubPages/Trending'

const Home = () => {
  return (
    <div>
      <ImageSlider pages={"Home"}/>
      <Trending heading={"Trending Products"}/>
    </div>
  )
}

export default Home
