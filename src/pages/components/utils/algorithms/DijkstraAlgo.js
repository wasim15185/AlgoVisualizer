function dijkstraAlgo(setArr) {
	class PriorityQueue {
		constructor() {
			this.values = [];
		}
		enqueue(val, priority) {
			this.values.push({ val, priority });
			this.sort();
		}
		dequeue() {
			return this.values.shift();
		}
		sort() {
			this.values.sort((a, b) => a.priority - b.priority);
		}
	}

	class Graph {
		constructor() {
			this.adjecencyList = {};
		}

		addVartex(vertex) {
			if (!this.adjecencyList[vertex]) this.adjecencyList[vertex] = [];
		}

		addEdge(vertex1, vertex2, edgeObj) {
			this.adjecencyList[vertex1].push({ nodeName: vertex2, edgeObj });
			this.adjecencyList[vertex2].push({ nodeName: vertex1, edgeObj });
		}

		dijkstra(start, end) {
			const nodes = new PriorityQueue();
			const distances = {};
			const previous = {};
			let smallest;
			const path = [];

			// for inital stateges start is 0 and other vertex is Infinity
			for (let vertex in this.adjecencyList) {
				if (vertex === start) {
					distances[vertex] = 0;
					nodes.enqueue(vertex, 0);
				} else {
					distances[vertex] = Infinity;
					nodes.enqueue(vertex, Infinity);
				}
				previous[vertex] = null;
			}

			while (nodes.values.length) {
				smallest = nodes.dequeue().val;
				if (smallest === end) {
					while (previous[smallest]) {
						path.push(smallest);
						smallest = previous[smallest];
					}

					break;
				}

				if (smallest || distances[smallest] !== Infinity) {
					for (let neighbor in this.adjecencyList[smallest]) {
						//finding neighbor nodes
						let nextNode = this.adjecencyList[smallest][neighbor];
						// calculating new distance to neighbors nodes
						let candidate = distances[smallest] + nextNode.edgeObj.value;
						// console.log(nextNode);
						if (candidate < distances[nextNode.nodeName]) {
							distances[nextNode.nodeName] = candidate;
							previous[nextNode.nodeName] = smallest;
							nodes.enqueue(nextNode.nodeName, candidate);
						}
					}
				}
			}

			path.push(smallest);
			path.reverse();

			let current;
			let next;
			let arr = [];

			for (let i = 0; i < path.length; i++) {
				current = path[i];
				next = path[i + 1];
				for (let x of this.adjecencyList[current]) {
					if (x.nodeName === next) {
						arr.push(x.edgeObj);
					}
				}
			}

			// setArr(arr);
			return arr;
		}
	}

	return Graph;
}

export default dijkstraAlgo;
