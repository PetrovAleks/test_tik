export default class Service {
	API_KEY = "563492ad6f917000010000010c0c64a5e02d40c99992544703788a91";
	BASE_URL = `https://api.pexels.com/videos/`;

	getNewVideo = async (pages = 1) => {
		const resourse = await fetch(this.BASE_URL + `search?query=people`, {
			headers: {
				Authorization: this.API_KEY,
			},
		});

		return await resourse.json().then((data) => {
			console.dir(data.videos);
			return data.videos;
		});
	};

	getPopularVideo = async (pages = 1) => {
		const resourse = await fetch(this.BASE_URL + `popular?page=${pages}`, {
			headers: {
				Authorization: this.API_KEY,
			},
		});

		return await resourse.json().then((data) => {
			return data.videos;
		});
	};
}
