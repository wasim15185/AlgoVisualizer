import React from "react";
import "./../../css/CustomDraggbleNode.css";
//Importing from 'React-redux'
import { connect } from "react-redux";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { purple } from "@material-ui/core/colors";

const CustomDraggbleNode = (props) => {
	const { id, isStartNode, isMousePressed } = props;

	const dragStart = (e) => {
		const target = e.target;
		e.dataTransfer.setData("card_id", target.id);
		isMousePressed();
	};

	const dragOver = (e) => {
		e.stopPropagation();
	};

	const dragEnd = () => {
		isMousePressed();
	};

	return (
		<div
			style={{
				background: "#e3f412",
			}}
			id={id}
			className="DragbleNode"
			draggable="true"
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDragEnd={dragEnd}
		>
			{isStartNode ? (
				<DoubleArrowIcon style={{ color: purple[700] }} />
			) : (
				<LocationOnIcon color="secondary" />
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	// console.log("satete");

	const { start, end } = state;
	return { start, end };
};

const mapDispathchToProps = (dispatch) => {
	return {
		isMousePressed: () => {
			dispatch({ type: "ISMOUSEPRESSED_FOR_DFS" });
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispathchToProps
)(CustomDraggbleNode);
