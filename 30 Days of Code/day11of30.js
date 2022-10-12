"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function main() {
	let arr = Array(6);

	for (let i = 0; i < 6; i++) {
		arr[i] = readLine()
			.replace(/\s+$/g, "")
			.split(" ")
			.map((arrTemp) => parseInt(arrTemp, 10));
	}

	var arr2 = [];
	for (var i = 1; i < arr.length - 1; i++) {
		for (var j = 1; j < arr[i].length - 1; j++) {
			var sum = 0;
			sum =
				parseInt(arr[i - 1][j - 1]) +
				parseInt(arr[i - 1][j]) +
				parseInt(arr[i - 1][j + 1]);
			sum = sum + parseInt(arr[i][j]);
			sum =
				sum +
				parseInt(arr[i + 1][j - 1]) +
				parseInt(arr[i + 1][j]) +
				parseInt(arr[i + 1][j + 1]);
			arr2.push(sum);
		}
	}
	console.log(Math.max.apply(null, arr2));
}
