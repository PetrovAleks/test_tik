import React from "react";
import { NavLink } from "react-router-dom";

const Nav = function (props) {
	const headerNav = props.navList.map((el, i) => {
		return (
			<li key={i} className="header-nav__item">
				<NavLink
					to={"/" + el}
					className="nav-item__link"
					activeClassName="active-link"
				>
					{el.toUpperCase()}
				</NavLink>
			</li>
		);
	});
	return <ul className="header-nav">{headerNav}</ul>;
};

export default Nav;
