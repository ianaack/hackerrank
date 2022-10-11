function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var N = parseInt(input[0]);

	let phonebook = [];

	for (var i = 0; i < N; i++) {
		var line = input[i + 1];
		line = line.split(" ");
		phonebook[line[0]] = line[1];
	}

	for (var j = N + 1; j < input.length; j++) {
		var num = phonebook[input[j]];
		if (num !== undefined) {
			console.log(input[j] + "=" + num);
		} else {
			console.log("Not found");
		}
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
