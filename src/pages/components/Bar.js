import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleBar from "./SingleBar";

const Style = makeStyles({
	BarContainer: ({ height }) => ({
		width: "100%",
		padding: "0 5px 5px 5px",
		height: `${height}%`,
		display: "flex",
		flexDirection: "row ",
		justifyContent: "center",
		alignItems: "flex-end",
		marginBottom: "2px",
	}),
});

function Bar({ heightInPercent, element, barColor }) {
	const valueSendToStyle = { height: heightInPercent };
	const classes = Style(valueSendToStyle);
	const { BarContainer } = classes;

	return (
		<div className={BarContainer}>
			{element.map((e, i) => {
				return (
					<SingleBar
						key={`BarKey-${i}`}
						width={element.length}
						height={e.number}
						color={e.color}
					/>
				);
			})}
		</div>
	);
}

export default Bar;
