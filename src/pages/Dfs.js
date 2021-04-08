import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { PlayCircleFilled } from "@material-ui/icons";
import { Select } from "antd";
import { ClearOutlined } from "@ant-design/icons";
// import ClearIcon from "@material-ui/icons/Clear";

// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Board from "./components/Board";
import dfsAlgo from "./components/utils/algorithms/DfsAlgorithm";
import sleepFun from "./components/utils/sleepFun";
// This for snackbar
import { useSnackbar } from "notistack";

const styles = makeStyles({
	buttonContainer: {
		height: "50px",
		maxWidth: "95%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		marginRight: "auto",
		marginLeft: "auto",
	},
	buttonHolder: {
		height: "100%",
		width: "220px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",

		// border: "1px solid blue",
	},
});

const Dfs = ({ walls, start, end, resetWall }) => {
	const [isVisiting, setVisiting] = useState(false);

	//This is for snackbar
	const { enqueueSnackbar } = useSnackbar();

	const colNum = 15;
	const rowNum = 45;

	let initGrid = [];

	for (let i = 0; i < colNum; i++) {
		let colArr = [];
		for (let j = 0; j < rowNum; j++) {
			colArr.push({
				neighbors: {
					right: {
						col: j + 1 < rowNum ? j + 1 : null,
						row: j + 1 < rowNum ? i : null,
					},
					left: {
						col: j - 1 >= 0 ? j - 1 : null,
						row: j - 1 >= 0 ? i : null,
					},
					down: {
						col: i + 1 < colNum ? j : null,
						row: i + 1 < colNum ? i + 1 : null,
					},
					up: {
						col: i - 1 >= 0 ? j : null,
						row: i - 1 >= 0 ? i - 1 : null,
					},
				},

				val: 0,
				color: "#e3f412",
				animation: false,
				blockWall: false,
			});
		}

		initGrid.push(colArr);
	}

	const [grid, setGrid] = useState(initGrid);

	//UseEffect

	useEffect(() => {
		const newGrid = grid.map((e, row) =>
			e.map((x, col) => {
				//Actually Changing array property (eg: which cell is a Wall or Not , if the particular cell is wall then change the color of wall)
				// x.val is for it's updating all node's previous value '0'
				// This Updating is Important
				x.val = 0;
				x.color = "#e3f412";
				x.blockWall = false;
				for (let i of walls) {
					if (i.col === col && i.row === row) {
						x.val = 1;
						x.color = "black";
						x.blockWall = true;
					}
				}
				return x;
			})
		);

		setGrid(newGrid);
	}, [walls.length]);

	const [time, setTime] = useState(40);

	//Events

	const handleClick = async () => {
		let isFindElement = await dfsAlgo(
			grid,
			setGrid,
			time,
			start,
			end,
			sleepFun,
			setVisiting
		);

		if (isFindElement) {
			enqueueSnackbar("ELement found", {
				variant: "success",
			});
			console.log("element found");
		} else {
			enqueueSnackbar("No Element found ", {
				variant: "error",
				autoHideDuration: 4000,
			});
		}

		setVisiting(false);
	};

	const handleReset = () => {
		resetWall();

		let resetGrid = grid.map((e) =>
			e.map((x) => {
				x.animation = false;
				x.val = 0;
				x.color = "#e3f412";
				x.blockWall = false;
				return x;
			})
		);

		setGrid(resetGrid);
	};

	const handleTimeChange = (e) => {
		setTime(e);
	};

	//This is 'SELECT' COMPONENT
	const { Option } = Select;

	//Styles
	const { buttonContainer, buttonHolder } = styles();

	return (
		<div
		// style={{ minWidth: "1550px" }}
		>
			<Board grid={grid} setGrid={setGrid} start={start} end={end} />

			<div className={buttonContainer}>
				<Select
					defaultValue="Medium"
					style={{ width: 120 }}
					onChange={handleTimeChange}
				>
					<Option value={5}>Fast</Option>
					<Option value={40}>Medium</Option>
					<Option value={120}>Slow</Option>
				</Select>

				<div className={buttonHolder}>
					<Button
						size="small"
						disabled={isVisiting}
						color="secondary"
						variant="contained"
						onClick={handleClick}
						startIcon={<PlayCircleFilled />}
					>
						Start
					</Button>

					<Button
						size="small"
						disabled={isVisiting}
						startIcon={<ClearOutlined />}
						variant="contained"
						color="primary"
						onClick={handleReset}
					>
						Clear
					</Button>
				</div>
			</div>
		</div>
	);
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

const mapStateToProps = (state) => {
	const { walls, start, end, isMousePressedForDFS } = state;

	return { walls, start, end, isMousePressedForDFS };
};

export default connect(mapStateToProps, mapDispathchToProps)(Dfs);
