import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles({
	Bar: ({ width, height, barColor }) => ({
		height: `${3 * height}px`,
		background: barColor,
		width: `${Math.floor(1300 / width)}px`,
		marginLeft: "2px",
		transition: "height .52s",
		border: "1px solid #f1f1f1",
		borderRadius: "2px",
		boxShadow: "3px 4px 8px -1px rgba(0,0,0,0.73)",
	}),
});

function SingleBar({ width, height, color }) {
	const barStyleProp = {
		width: width,
		height: height,
		barColor: color,
	};
	const classes = Style(barStyleProp);
	const { Bar } = classes;
	return <div className={Bar}></div>;
}

export default SingleBar;
