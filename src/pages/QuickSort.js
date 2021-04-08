import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { WarningOutlined } from "@ant-design/icons";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { Button, Slider, Typography } from "@material-ui/core";
import { message, notification } from "antd";
import Bar from "./components/Bar";
import Hr from "./components/Hr";
// Quick Sort Algorithm
import quickFun from "./components/utils/algorithms/quickSortFun";

const useStyles = makeStyles({
	CanvasContainer: {
		width: "100%",
		height: "81vh",
		display: "flex",
		flexDirection: "column",
	},

	numberDisplay: {
		height: "5%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "row ",
		alignItems: "center",
	},
	Controller: {
		width: "100%",
		height: "20%",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		background: "#fff",
		marginTop: "5px",
	},
	sliderContainer: {
		width: "55vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		height: "87%",
	},
	singleSliderContainer: {
		border: ".5px solid #ccc",
		background: "#fff",
		width: "40%",
		padding: "10px",
		borderRadius: "3px",
	},
});

const QuickSort = () => {
	const [arr, setArr] = useState([
		{ number: 69, color: "#f4124b" },
		{ number: 56, color: "#f4124b" },
		{ number: 10, color: "#f4124b" },
		{ number: 89, color: "#f4124b" },
		{ number: 8, color: "#f4124b" },
		{ number: 56, color: "#f4124b" },
		{ number: 58, color: "#f4124b" },
		{ number: 23, color: "#f4124b" },
		{ number: 77, color: "#f4124b" },
		{ number: 11, color: "#f4124b" },
		{ number: 1, color: "#f4124b" },
	]);

	const [disable, setDisable] = useState(false);
	const [time, setTime] = useState(4);
	const [alreadySorted, setAlreadySorted] = useState(false);
	const [sliderVal, setSliderVal] = useState(0);

	const classes = useStyles();
	const {
		CanvasContainer,
		Controller,
		sliderContainer,

		numberDisplay,
		singleSliderContainer,
	} = classes;

	const handleChange = (e, v) => {
		setSliderVal(v);

		let arrCraeted = [];

		for (let i = 0; i < v / 1.4; i++) {
			arrCraeted.push({
				number: Math.floor(Math.random() * 100),
				color: "#f4124b",
			});
		}
		setAlreadySorted(false);
		setArr(arrCraeted);
	};

	const timeHandleChange = (e, t) => {
		setTime(t);
	};

	const handleClick = async () => {
		if (arr.length !== 0) {
			let key = "awqqk@bman";

			message.warning({
				content: "Quick Sort is Running ! Don't click any Button",
				key,
				duration: 0,
				style: {
					marginTop: "20vh",
					fontWeight: "500",
				},
			});

			setDisable(true);
			await quickFun(setArr, arr, time, setDisable);

			for (let i = 0; i < arr.length; i++) {
				arr[i].color = "#23ff00";
			}

			message.destroy(key);

			message.success({
				content: "Quick Sort Completed",
				duration: 3,
				style: {
					marginTop: "20vh",
				},
			});
			setAlreadySorted(true);
			setDisable(false);
		}
	};

	const handleRandom = () => {
		if (sliderVal !== 0 || arr.length === 11) {
			let round = sliderVal === 0 ? arr.length : sliderVal / 1.4;
			let arrCraeted = [];
			for (let i = 0; i < round; i++) {
				arrCraeted.push({
					number: Math.floor(Math.random() * 100),
					color: "#f4124b",
				});
			}
			setAlreadySorted(false);
			setArr(arrCraeted);
		}
	};

	return (
		<div>
			<h2
				style={{
					fontWeight: "700",
					padding: "2px",
					textTransform: "uppercase",
					textAlign: "center",
					color: "#101820FF",
					background: "#fff",
					width: "20%",

					display: "flex",
					justifyContent: "center",
					flexDirection: "column ",
					alignItems: "center",

					marginTop: "5px",
					marginLeft: "auto",
					marginRight: "auto ",
					borderRadius: "4px",
				}}
			>
				Quick Sort
				<hr
					style={{ width: "200px", border: "none ", height: "1px" }}
					color="#e7e7e7"
				/>
			</h2>

			<div className={CanvasContainer}>
				{/* //Here Position for "CANVAS" */}

				<Bar heightInPercent={85} element={arr} disable={disable} />
				<Hr />
				<div className={numberDisplay}>
					{arr.map((e, i) => (
						<div
							key={`num-${i}`}
							style={{
								width: `${Math.floor(1300 / arr.length)}px`,
								marginLeft: "2px",
								height: "80%",
								fontSize: "70%",
								fontWeight: "700",
								background: "#fff",
								textAlign: "center",
								borderRadius: "3px",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "black",
								color: "#fff",
								border: "1.5px solid #cfcfcf",
								boxShadow: "3px 4px 8px -1px rgba(0,0,0,0.73)",
							}}
						>
							{e.number}
						</div>
					))}
				</div>
				<Hr />

				<div className={Controller}>
					<div className={sliderContainer}>
						<div className={singleSliderContainer}>
							<Typography>Value :</Typography>
							<Slider disabled={disable} step={1} onChange={handleChange} />
						</div>
						<div className={singleSliderContainer}>
							<Typography>Time :</Typography>
							<Slider
								disabled={disable}
								step={1}
								min={0}
								max={50}
								onChange={timeHandleChange}
							/>
						</div>
					</div>

					<div
						style={{
							width: "270px",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							alignItems: "center",
						}}
					>
						<Button
							disabled={disable}
							size="medium"
							variant="contained"
							color="secondary"
							startIcon={<ShuffleIcon />}
							onClick={handleRandom}
						>
							Random
						</Button>

						<Button
							size="medium"
							variant="contained"
							startIcon={<EqualizerIcon />}
							color="primary"
							disabled={disable}
							onClick={
								alreadySorted === false
									? handleClick
									: () => {
											const key = "updatable";
											notification.open({
												key,
												description:
													"Array already sorted ! Please change slider ",
												duration: 2,
												style: {
													fontSize: "90%",
												},
												icon: <WarningOutlined style={{ color: "red" }} />,
											});
									  }
							}
						>
							Sort
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickSort;
