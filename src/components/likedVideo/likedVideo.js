import { React, Component } from "react";

export default class LikedVideo extends Component {
	state = {
		videoList: [],
	};
	componentDidMount() {
		this.setState((prevState) => {
			return {
				videoList: [...prevState.videoList, ...this.props.listLikedVideo],
			};
		});
	}
	render() {
		const list = this.state.videoList.map((el, i) => {
			return (
				<li className="item-liked-video" id={el.id}>
					{el.name}
				</li>
			);
		});
		return <ul className="list-liked-video">{list}</ul>;
	}
}
