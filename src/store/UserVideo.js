import { makeObservable, observable, action, computed } from 'mobx'

class UserVideoStore {
  likedVideos = [];
  selectedVideoId = null;

  constructor(likedVideos) {
    makeObservable(this, {
      selectedVideoId: observable,
      likedVideos: observable,
      toggleLike: action,
      selectedVideo: computed
    })
    this.likedVideos = likedVideos
    this.selectedVideoId = null;
  }

  isLiked(video) {
    return this.likedVideos.findIndex((i) => i.id === video.id) > -1
  }

  toggleLike(video) {
    const index = this.likedVideos.findIndex((i) => i.id === video.id)
    if (index > -1) {
      this.likedVideos.splice(index, 1)
      this.likedVideos = [...this.likedVideos]
    } else {
      this.likedVideos = [...this.likedVideos, video]
    }
  }

  get selectedVideo() {
    const video = this.likedVideos.find((i) => i.id === this.selectedVideoId)
    return video ? video : null;
  }
}

export const userVideoStore = new UserVideoStore([])
