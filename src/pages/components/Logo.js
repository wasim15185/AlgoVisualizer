import React from "react";
import logoSrc from "./../../images/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
const Style = makeStyles({
	mainLogoDiv: (heightInPixel, style) => ({
		"& a": {
			color: "black",
		},

		"& div": {
			height: `${heightInPixel}px`,
			display: "flex",
			flexDirection: "row ",
			justifyContent: "center",
			alignItems: "center",
		},
		"& img": {
			height: `${heightInPixel}px`,
		},

		"& span": {
			padding: "5px",
			fontSize: "1.05em",
			fontWeight: " 800",
			alignItems: "center",
			textTransform: "uppercase",
			display: "flex",
			justifyContent: "center",
			letterSpacing: "0.5px",
		},
	}),
});

const Logo = ({ heightInPixel, style, to }) => {
	const classes = Style(heightInPixel);
	const { mainLogoDiv } = classes;
	return (
		<main className={mainLogoDiv} style={style}>
			<NavLink to={to}>
				<div>
					<img src={logoSrc} alt="MainLogo" />
					<span>Algo / Visualizer</span>
				</div>
			</NavLink>
		</main>
	);
};

export default Logo;
