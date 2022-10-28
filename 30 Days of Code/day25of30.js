function processData(input) {
	//Enter your code here
	let result = input.split("\n").slice(1).map(isPrime);

	function isPrime(input, i) {
		let message = ["Not prime", "Prime"];

		if (input == 1) {
			return message[0];
		}
		if (input == 2) {
			return message[1];
		}
		if (input % 2 == 0) {
			return message[0];
		}

		for (i = 3; i <= Math.sqrt(input); i += 2) {
			if (input % i == 0) {
				return message[0];
			}
		}
		return message[1];
	}

	console.log(result.join("\n"));
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
