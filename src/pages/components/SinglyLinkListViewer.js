import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Circle from "./Circle";
import Image from "./Image";

const Style = makeStyles({
	LinkListContainer: ({ height }) => ({
		width: "100%",
		padding: "0 5px 5px 5px",
		height: `${height}%`,
		// border: "2px solid #fff",
		display: "flex",
		background: "#f0f0f0",
		flexDirection: "row ",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "2px",
		overflow: "auto",
		flexWrap: "nowrap",
	}),
});

function SinglyLinkListViewer({ heightInPercent, arr }) {
	const valueSendToStyle = { height: heightInPercent };
	const classes = Style(valueSendToStyle);
	const { LinkListContainer } = classes;
	return (
		<div className={LinkListContainer}>
			{arr.map((e, i) => (
				<>
					<Circle key={`circle-singly-{i}`} element={e} length={arr.length} />
					<Image key={`img-singly-{i}`} />
				</>
			))}
		</div>
	);
}

export default SinglyLinkListViewer;
