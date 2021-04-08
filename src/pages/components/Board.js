import React from "react";
import "./../../css/Board.css";
import SingleNode from "./SingleNode";
import { connect } from "react-redux";
function Board({ isMousePressedForDFS, grid, changeMousePressVal, algoName }) {
	return (
		<>
			<div className="Board-Container   ">
				<div
					className="Board  "
					onMouseLeave={() => {
						if (isMousePressedForDFS) {
							changeMousePressVal();
						}
					}}
				>
					{grid.map((e, i) => {
						return (
							<div className="Column" key={i}>
								{e.map((x, j) => (
									<SingleNode
										key={`col${i}-row${j}`}
										col={j}
										row={i}
										value={x.val}
										color={x.color}
										animation={x.animation}
										algoName={algoName}
									/>
								))}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	const { walls, start, end, isMousePressedForDFS } = state;

	return { walls, start, end, isMousePressedForDFS };
};

const mapDispathchToProps = (dispatch) => {
	return {
		changeMousePressVal: () => {
			dispatch({ type: "ISMOUSEPRESSED_FOR_DFS" });
		},

		resetWall: () => {
			dispatch({ type: "RESETWALL" });
		},
	};
};

export default connect(mapStateToProps, mapDispathchToProps)(Board);

// right: { col: j + 1, row: i },
// 					left: { col: j - 1, row: i },
// 					down: { col: j, row: i + 1 },
// 					up: { col: j, row: i - 1 },
