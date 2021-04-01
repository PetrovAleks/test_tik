import React from "react";
import { Slider } from "@lifarl/react-scroll-snap-slider";

const MainSlider = (props) => {
	const sliderImg = props.sliderData.map((el, i) => {
		return (
			<div key={i} className="slider-item">
				<div className="wrapper-img">
					<img
						className="slider-img"
						src={el.src_1}
						alt={el.alt_1}
						width="400px"
					/>
				</div>
				<div className="wrapper-img">
					<img
						className="slider-img"
						src={el.src_2}
						alt={el.alt_2}
						width="400px"
					/>
				</div>
			</div>
		);
	});
	const slider = <Slider>{sliderImg}</Slider>;

	return <div className="slider-list">{slider}</div>;
};

export default MainSlider;
