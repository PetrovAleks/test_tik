class VideoService {
  API_KEY = '17612485-8bb53cdbeec1d9d4515dc9d2c'
  BASE_URL = `https://pixabay.com/api/videos/?key=${this.API_KEY}`

  getNewVideo = async (pages = 1) => {
    const resourse = await fetch(this.BASE_URL + '&q=red+flowers')

    return await resourse.json().then((data) => {
      return data.hits
    })
  }

  getPopularVideo = async (pages = 2) => {
    const resourse = await fetch(this.BASE_URL + '&q=yellow+flowers')
    return await resourse.json().then((data) => {
      return data.hits
    })
  }
}
export const videoService = new VideoService()
