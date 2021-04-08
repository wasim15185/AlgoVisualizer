import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CustomDraggbleNode from "./CustomDraggbleNode";

//Importing from 'React-redux'
import { connect } from "react-redux";
import "./../../css/SingleNode.css";

const Style = makeStyles({
	Node: ({ isFinish, isStart, isWall, isVisited, color }) => ({
		height: "33.22px",
		width: "33.22px",
		border: ".1px solid #fff",
		display: "inline-block",
		textAlign: "center",
		borderRadius: "2px",
		background: isVisited ? "yellow" : color,
	}),
});

function SingleNode({
	row,
	col,
	isVisited,
	setOrDeleteWall,
	setStart,
	value,
	setEnd,
	color,
	isMousePressedForDFS,
	setMousePress,
	animation,
	algoName,
	start,
	end,
}) {
	let isStart = row === start.row && col === start.col;
	let isFinish = row === end.row && col === end.col;

	const { Node } = Style({ isFinish, isStart, isVisited, color });

	const onMouseDownHandler = () => {
		if (!(isFinish || isStart)) {
			setMousePress();
			setOrDeleteWall({ row, col });
		}
	};

	const onMouseUpHandler = () => {
		if (!(isFinish || isStart)) {
			if (isMousePressedForDFS) {
				setMousePress();
			}
		}
	};

	const onMouseEnterHandler = (e) => {
		if (!(isFinish || isStart)) {
			if (!isMousePressedForDFS) return;

			setOrDeleteWall({ row, col });
		}
	};

	const drop = (e) => {
		e.preventDefault();
		const card_id = e.dataTransfer.getData("card_id");
		const card = document.getElementById(card_id);

		if (card) {
			if (card.id === "start") {
				setStart({ row, col });
				setMousePress();
			} else {
				setEnd({ row, col });
				setMousePress();
			}
		}
	};

	const dragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div
			key={`singleNode${row - col}`}
			className={!isStart && animation ? `SingleNode_Animation  ${Node}` : Node}
			onMouseDown={onMouseDownHandler}
			onMouseUp={onMouseUpHandler}
			onMouseEnter={onMouseEnterHandler}
			onDrop={drop}
			onDragOver={dragOver}
		>
			{(isStart || isFinish) && (
				<CustomDraggbleNode
					id={isStart ? "start" : "end"}
					isStartNode={isStart}
					isEndNode={isFinish}
					color={color}
				/>
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	const { isMousePressedForDFS, start, end } = state;
	return { isMousePressedForDFS, start, end };
};

const mapDispathchToProps = (dispatch) => {
	return {
		setOrDeleteWall: (position) => {
			dispatch({ type: "ISWALLDFS", wallNode: position });
		},

		setStart: (startNode) => {
			dispatch({ type: "SET_STARTNODE", startNodeVal: startNode });
		},

		setEnd: (endNode) => {
			dispatch({ type: "SET_ENDNODE", endNodeVal: endNode });
		},

		setMousePress: () => {
			dispatch({ type: "ISMOUSEPRESSED_FOR_DFS" });
		},
	};
};

export default connect(mapStateToProps, mapDispathchToProps)(SingleNode);
