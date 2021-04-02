import React from 'react'

import CardVideo from '../cardVideo/cardVideo'
import { userVideoStore } from '../../store/UserVideo'
import { observer } from 'mobx-react-lite'

export const VideoList = observer((props) => {
  const videoList = props.data.map((el, i) => {
    console.dir(el)
    const video = el.videos.tiny.url

    return (
      <li className="video-item">
        <CardVideo
          key={i}
          user={el.user}
          id={el.id}
          video={video}
          click={() => userVideoStore.toggleLike(video)}
          liked={userVideoStore.isLiked(video)}
        />
      </li>
    )
  })

  return <ul className="video-list">{videoList}</ul>
})
