function processData(input) {
	//Enter your code here
	let message = input.split("\n");

	let n = parseInt(message[0]);

	for (var i = 0; i < n; i++) {
		var m = message[i + 1];
		var l = m.length;
		var arr = m.split("");
		var ra = "";
		var rb = "";

		for (var j = 0; j < l; j++) {
			if (j % 2 == 0) {
				ra = ra + arr[j];
			} else {
				rb = rb + arr[j];
			}
		}
		console.log(ra + " " + rb);
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input);
});
