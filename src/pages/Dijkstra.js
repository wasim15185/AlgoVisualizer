import React, { useState } from "react";
import "./../css/pages/Dijkstra.css";
import Canvas from "./components/Canvas";
import useToggler from "./components/Toggler";
import sleepFun from "./components/utils/sleepFun";
import VideoModal from "./components/VideoModal";
import { Button, IconButton } from "@material-ui/core";
import { Select } from "antd";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import { ClearOutlined } from "@ant-design/icons";
import demo from "./../videos/DijkstraVideo-No-Edit.mp4";
//This Only for snackbar
import { useSnackbar } from "notistack";
import Zoom from "@material-ui/core/Zoom";
//----------------------------------------

function Dijkstra() {
	const [arr, setArr] = useState([]);
	const [reload, setReload] = useToggler(true);
	const [time, setTime] = useState(60);
	const [isModalVisible, setModalVisible] = useState(false);

	///This For SnackBar
	const { enqueueSnackbar } = useSnackbar();

	const handleStart = async () => {
		if (arr.length !== 0) {
			for (let line of arr) {
				await sleepFun(time);
				line.setColor("#fff");
			}
		} else {
			enqueueSnackbar("Please set Arrows positions correctly", {
				variant: "error",
				autoHideDuration: 2000,
				anchorOrigin: {
					vertical: "top",
					horizontal: "center",
				},

				TransitionComponent: Zoom,
			});
		}
	};

	const handleReload = () => {
		setReload();
	};

	const handleTimeChange = (e) => {
		setTime(e);
	};

	const handleDemo = () => {
		setModalVisible(true);
	};

	//This is 'SELECT' COMPONENT
	const { Option } = Select;

	return (
		<div
		// style={{ position: "absolute" }}
		>
			<VideoModal
				isVisible={isModalVisible}
				setVisible={setModalVisible}
				videoUrl={demo}
			/>
			<Canvas reload={reload} setArr={setArr} setReload={setReload} />

			<div className="navigation-area">
				<Select
					defaultValue="Medium"
					style={{ width: 120 }}
					onChange={handleTimeChange}
				>
					<Option value={20}>Fast</Option>
					<Option value={60}>Medium</Option>
					<Option value={150}>Slow</Option>
				</Select>

				<IconButton
					onClick={handleDemo}
					color="secondary"
					aria-label="Play Demo Video"
				>
					<PlayCircleFilledWhiteIcon />
				</IconButton>

				<div className="DijkstraButton-Container">
					<Button
						onClick={handleStart}
						variant="contained"
						color="primary"
						size="small"
						startIcon={<SearchIcon />}
					>
						start
					</Button>
					<Button
						onClick={handleReload}
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<ClearOutlined />}
					>
						clear
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Dijkstra;
