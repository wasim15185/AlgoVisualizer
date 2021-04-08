import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleLinkListViewer from "./components/SinglyLinkListViewer";
import SinglyList from "./components/utils/algorithms/singlyLinkedListAlgo";
import AddInputButton from "./components/AddInputButton";
// This for snackbar
import { useSnackbar } from "notistack";

const singlyList = new SinglyList();

const useStyles = makeStyles({
	CanvasContainer: {
		width: "100%",
		height: "78vh",
		// border: "1px solid green",
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
		background: "#fff",
		border: "1px solid #f1f1f1",
	},
	Controller: {
		width: "100%",
		height: "20%",
		// border: "1px dashed red",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		background: "#fff",
		marginTop: "4px",
	},
});

const SinglyLinkList = () => {
	//This is for snackbar
	const { enqueueSnackbar } = useSnackbar();

	const [number, setNumber] = useState(0);

	const [arr, setArr] = useState(singlyList.print());

	const classes = useStyles();
	const { CanvasContainer, Controller } = classes;

	const addElement = () => {
		if (arr.length < 14) {
			singlyList.push(number);
			setArr(singlyList.print());
		} else {
			enqueueSnackbar(
				"Sorry Cannot add Element because display will overload",
				{
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					variant: "error",
				}
			);
		}
	};

	const onDelete = () => {
		singlyList.pop();
		setArr(singlyList.print());
	};

	return (
		<div>
			<h2
				style={{
					fontWeight: "800",
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
				Singly Linked List
				<hr
					style={{ width: "230px", border: "none ", height: "1px" }}
					color="#e7e7e7"
				/>
			</h2>

			<div className={CanvasContainer}>
				<SingleLinkListViewer heightInPercent={80} arr={arr} />
				<div className={Controller}>
					<AddInputButton
						num={number}
						setNum={setNumber}
						name="Insert"
						addElement={addElement}
					/>
					<AddInputButton
						num={number}
						setNum={setNumber}
						name="Delete"
						onDelete={onDelete}
					/>
				</div>
			</div>
		</div>
	);
};

export default SinglyLinkList;
