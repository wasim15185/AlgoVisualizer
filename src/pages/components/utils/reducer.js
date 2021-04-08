const initState = {
	walls: [],
	start: { col: 10, row: 7 },
	end: { col: 30, row: 7 },
	isMousePressedForDFS: false,
};

function isInWallOrNot(arr, node) {
	if (arr.some((e) => e.col === node.col && e.row === node.row)) {
		return arr.filter((e) => e.col !== node.col || e.row !== node.row);
	} else {
		arr.push({ ...node });
	}

	return arr;
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case "ISWALLDFS":
			const x = {
				...state,
				walls: [...isInWallOrNot(state.walls, action.wallNode)],
			};

			return x;

		case "RESETWALL":
			return { ...state, walls: [] };

		case "SET_STARTNODE":
			return { ...state, start: action.startNodeVal };

		case "SET_ENDNODE":
			return { ...state, end: action.endNodeVal };
		case "ISMOUSEPRESSED_FOR_DFS":
			return { ...state, isMousePressedForDFS: !state.isMousePressedForDFS };

		default:
			return state;
	}
};

export default reducer;
