import React, { Component } from "react";

import LikedVideo from "../components/likedVideo/likedVideo";
import ViewingVideos from "../components/viewingVideos/viewingVideos";

export default class Main extends Component {
	render() {
		return (
			<div className="container d-flex">
				<LikedVideo listLikedVideo={this.props.listLikedVideo} />
				<ViewingVideos />
			</div>
		);
	}
}
