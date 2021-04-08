class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;

		let newTail = current;

		//newTail :=> pointing the a Element from before current element

		//  1    -->     2       --> 3         -->4
		//newTail     current
		//         newTail      current
		//                      newTail      current

		while (current.next) {
			newTail = current;
			current = current.next;
		}

		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	print() {
		const arr = [];
		let current = this.head;
		while (current) {
			arr.push(current.val);
			current = current.next;
		}

		return arr;
	}
}

export default SinglyList;
