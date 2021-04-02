import { observer } from 'mobx-react'
import { React } from 'react'
import { userVideoStore } from '../../store/UserVideo'

export const LikedVideo = observer((props) => {
  const list = userVideoStore.likedVideos.map((el, i) => {
    return (
      <li className="item-liked-video" key={el.id} id={el.id} onClick={() => props.onSetIdVidoe(el.id)}>
        {el.link}
      </li>
    )
  })
  return <ul className="list-liked-video">{list}</ul>
})
