import { makeObservable, observable, action } from 'mobx'

class UserVideoStore {
  likedVideos = []

  constructor(likedVideos) {
    makeObservable(this, {
      likedVideos: observable,
      toggleLike: action,
    })
    this.likedVideos = likedVideos
  }

  isLiked(video) {
    return this.likedVideos.findIndex((i) => i.id === video.id) > -1
  }

  toggleLike(video) {
    console.dir(video.id)
    const index = this.likedVideos.findIndex((i) => i.id === video.id)
    if (index > -1) {
      this.likedVideos.splice(index, 1)
      this.likedVideos = [...this.likedVideos]
    } else {
      this.likedVideos = [...this.likedVideos, video]
    }
  }
}

export const userVideoStore = new UserVideoStore([])
