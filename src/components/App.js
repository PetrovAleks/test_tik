import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./header/header";
import Discover from "../pages/discover";
import Main from "../pages/main";

export default class App extends Component {
	state = {
		listLikedVideo: [],
	};
	onHendelClick = (card) => {
		console.dir(card);
		const likedVideo = [
			{
				name: card.props.user.name,
				id: card.props.id,
			},
		];
		this.setState((prevState) => {
			console.dir(prevState.listLikedVideo);
			return {
				listLikedVideo: [...prevState.listLikedVideo, ...likedVideo],
			};
		});
	};
	render() {
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route
						path="/main"
						render={(props) => (
							<Main {...props} listLikedVideo={this.state.listLikedVideo} />
						)}
					/>
					<Route
						path="/discover"
						render={(props) => (
							<Discover
								{...props}
								onHendelClick={(card) => this.onHendelClick(card)}
							/>
						)}
					/>

					<Redirect to="/main" />
				</Switch>
			</div>
		);
	}
}
