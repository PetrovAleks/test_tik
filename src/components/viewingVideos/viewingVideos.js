import { observer } from 'mobx-react'
import React from 'react'
import { userVideoStore } from '../../store/UserVideo'

const ViewingVideos = observer(() => {
  const videoUrl = userVideoStore.selectedVideo ? userVideoStore.selectedVideo.videos.tiny.url : '/'

  return (
    <div className="wrapper-video">
      <video className="video" autoPlay={true} controls key={videoUrl}>
        <source src={videoUrl} />
      </video>
    </div>
  )
})

export default ViewingVideos
