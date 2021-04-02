import React from 'react'

import CardVideo from '../cardVideo/cardVideo'
import { userVideoStore } from '../../store/UserVideo'
import { observer } from 'mobx-react-lite'

export const VideoList = observer((props) => {
  const videoList = props.data.map((item, i) => {

    const videoUrl = item.videos.tiny.url
    return (
      <li className="video-item" key={item.id}>
        <CardVideo
          key={i}
          user={item.user}
          id={item.id}
          videoUrl={videoUrl}
          click={() => userVideoStore.toggleLike(item)}
          liked={userVideoStore.isLiked(item)}
        />
      </li>
    )
  })

  return <ul className="video-list">{videoList}</ul>
})
