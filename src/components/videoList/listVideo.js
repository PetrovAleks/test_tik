import React, { Component } from "react";

import CardVideo from "../cardVideo/cardVideo";

export default class VideoList extends Component {
	state = {
		block: "",
		data: [],
		page: 2,
	};
	componentDidMount() {
		this.setState({
			block: document.querySelector(".video-list"),
		});
		this.props.services().then((data) => {
			this.setState({
				data,
			});
		});
	}
	// scroll = () => {
	// 	// функция создания элемента списка
	// 	function nextPage() {
	// 		this.props.services(this.state.page).then((data) => {
	// 			this.setState({
	// 				data: [...data],
	// 			});
	// 		});
	// 		this.setState({
	// 			page: this.state.page + 1,
	// 		});
	// 	}

	// 	// для того, чтобы все время наблюдать за последним элементом списка
	// 	// мы используем нечто вроде замыкания
	// 	// прекращаем наблюдать за целевым элементом после создания очередного li
	// 	// и начинаем наблюдать за этим новым (последним) элементом
	// 	let observer = new IntersectionObserver(
	// 		(entries, observer) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					return console.log("e");
	// 					nextPage();
	// 				}
	// 				observer.unobserve(entry.target);
	// 				observer.observe(this.state.block.querySelector("li:last-child"));
	// 			});
	// 		},
	// 		{
	// 			threshold: 1,
	// 		}
	// 	);

	// 	observer.observe(this.state.block.querySelector("li"));
	// };

	render() {
		const videoList = this.state.data.map((el, i) => {
			return (
				<li className="video-item" key={i}>
					<CardVideo
						user={el.user}
						id={el.id}
						video={el.video_files}
						click={this.props.click}
					/>
				</li>
			);
		});

		return <ul className="video-list">{videoList}</ul>;
	}
}
