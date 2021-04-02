import React from 'react'

import { LikedVideo } from '../components/likedVideo/likedVideo'
import ViewingVideos from '../components/viewingVideos/viewingVideos'

const Main = () => {
  return (
    <div className="container d-flex">
      <LikedVideo />
      <ViewingVideos />
    </div>
  )
}

export default Main
