process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
	input_stdin += data;
});

process.stdin.on("end", function () {
	input_stdin_array = input_stdin.split("\n");
	main();
});
function readLine() {
	return input_stdin_array[input_currentline++];
}
function Node(data) {
	this.data = data;
	this.next = null;
}
function Solution() {
	this.insert = function (head, data) {
		//complete this method

    // create a new node with the data passed in
		newNode = new Node(data);
    // set the current node as the passed in head
		curNode = head;

    // if the current node is not null (ie. it has values), walk the node list
		if (curNode != null) {
			while (curNode.next != null) {
				curNode = curNode.next;
			}
			curNode.next = newNode;
      // otherwise, if the list is empty, return the created node
		} else {
			head = newNode;
		}
		return head;
	};

	this.display = function (head) {
		var start = head;
		while (start) {
			process.stdout.write(start.data + " ");
			start = start.next;
		}
	};
}
function main() {
	var T = parseInt(readLine());
	var head = null;
	var mylist = new Solution();
	for (i = 0; i < T; i++) {
		var data = parseInt(readLine());
		head = mylist.insert(head, data);
	}
	mylist.display(head);
}
