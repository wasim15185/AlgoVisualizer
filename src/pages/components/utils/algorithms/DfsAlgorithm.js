const dfsAlgo = async (
	matrix,
	setGrid,
	time,
	startNode,
	endNode,
	sleepFun,
	setVisiting
) => {
	async function isValidPath(gridArg, idx) {
		let x = idx.row,
			y = idx.col;
		return (
			x >= 0 &&
			x < gridArg.length &&
			y >= 0 &&
			y < gridArg[x].length &&
			gridArg[x][y].val === 0
		);
	}

	const hasPath = async (grid, start, end) => {
		grid[start.row][start.col].val = 1;

		return await searchInGrid(grid, start, end);
	};

	const searchInGrid = async (grid, current, end) => {
		if (current.row === end.row && current.col === end.col) {
			return true;
		}

		let directions = [
			[0, 1],
			[1, 0],
			[0, -1],
			[-1, 0],
		];

		let newGrid = grid.map((e, i) =>
			e.map((x, j) => {
				setVisiting(true);
				if (x.val === 1 && !x.blockWall) {
					x.color = "#12d0f4";
					x.animation = true;
				}
				return x;
			})
		);
		await sleepFun(time);
		setGrid(newGrid);

		let neighborIdx;

		for (let direction of directions) {
			neighborIdx = {
				row: current.row + direction[0],
				col: current.col + direction[1],
			};

			if (await isValidPath(grid, neighborIdx)) {
				grid[neighborIdx.row][neighborIdx.col].val = 1;

				if (await searchInGrid(grid, neighborIdx, end)) {
					return true;
				}
			}
		}

		return false;
	};

	return await hasPath(matrix, startNode, endNode);
};

export default dfsAlgo;
