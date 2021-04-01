import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export default function Title(props) {
	const { variant, component, children, color } = props;
	return (
		<Typography
			component={component}
			variant={variant}
			color={color}
			gutterBottom
		>
			{children}
		</Typography>
	);
}

Title.propTypes = {
	children: PropTypes.node,
};
