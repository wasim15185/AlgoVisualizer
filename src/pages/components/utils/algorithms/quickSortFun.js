import sleep from "./../sleepFun";

const quickFun = async (setArr, ArrForSorting, time) => {
	// console.log(ArrForSorting);

	const swap = async (arr, a, b) => {
		await sleep(time);
		let temp = arr[a];
		arr[a] = arr[b];
		arr[a].color = "#FEE715FF";
		arr[b] = temp;
		arr[b].color = "#FEE715FF";
	};

	let partition = async (arr, lowerBound, upperBound) => {
		let pivotIdx = upperBound;
		let pivotElement = arr[lowerBound].number;

		for (let i = upperBound; i > lowerBound; i--) {
			if (arr[i].number >= pivotElement) {
				// Swapping Arr[i] and Arr[pivotIndex]

				await swap(arr, i, pivotIdx);

				pivotIdx--;
			}
		}

		// Swapping Arr[pivotIdx] and Arr[lowerBound]
		await swap(arr, pivotIdx, lowerBound);

		return pivotIdx;
	};

	let quickSort = async (arr, low, high) => {
		if (arr.length === 0) {
			return;
		}

		setArr([...arr]);

		if (low < high) {
			let index = await partition(arr, low, high);

			await quickSort(arr, low, index - 1);
			await quickSort(arr, index + 1, high);
		}
	};

	await quickSort(ArrForSorting, 0, ArrForSorting.length - 1);
};

export default quickFun;
