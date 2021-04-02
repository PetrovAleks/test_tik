import { React, Component } from 'react'

export default class CardVideo extends Component {
  render() {
    const { user, video, click, liked = false } = this.props
    return (
      <div className="card">
        <h3 className="user-name">{user.name}</h3>
        <video className="card-video" controls="controls">
          <source src={video} />
        </video>
        <div className="card-interfaces">
          <button className="card-interfaces__like" onClick={() => click()}>
            {liked ? 'Unlike' : 'Like'}
          </button>
        </div>
      </div>
    )
  }
}
