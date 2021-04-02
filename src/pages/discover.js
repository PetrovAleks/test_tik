import React, { useEffect, useState } from 'react'

import MainSlider from '../components/slider/slider'
import { videoService } from '../services/VideoService'

import { VideoList } from '../components/videoList/listVideo'

export const DiscoverPage = () => {
  const [popularVideo, setPopularVideo] = useState([])
  const [newVideo, setNewVideo] = useState([])

  useEffect(() => {
    videoService.getPopularVideo().then((data) => setPopularVideo(data))
    videoService.getNewVideo().then((data) => setNewVideo(data))
  }, [])

  return (
    <section className="discover">
      <div className="container ">
        <MainSlider />
        <VideoList data={popularVideo} />
        <VideoList data={newVideo} />
      </div>
    </section>
  )
}
