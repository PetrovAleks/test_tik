import { observer } from 'mobx-react'
import { React } from 'react'
import { userVideoStore } from '../../store/UserVideo'

export const LikedVideo = observer((props) => {
  const list = userVideoStore.likedVideos.map((el, i) => {
    return (
      <li className="item-liked-video" key={el.id} id={el.id} onClick={() => userVideoStore.selectedVideoId = el.id}>
        {el.user} - {el.id}
      </li>
    )
  })
  return <ul className="list-liked-video">{list}</ul>
})
