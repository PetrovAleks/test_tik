import React, { Component } from "react";

import MainSlider from "../components/slider/slider";
import sliderData from "../components/slider/sliderData";
import Service from "../services/sevices";

import VideoList from "../components/videoList/listVideo";

export default class Discover extends Component {
	services = new Service();
	render() {
		return (
			<section className="discover">
				<div className="container ">
					<MainSlider sliderData={sliderData} />
					<VideoList
						services={() => this.services.getPopularVideo()}
						click={this.props.onHendelClick}
					/>
					<div className="llist-wrapper">
						<VideoList
							services={() => this.services.getNewVideo()}
							click={this.props.onHendelClick}
						/>
					</div>
				</div>
			</section>
		);
	}
}
