var numberArray = [ 234, 512, 1, 1999, 2503, 5452, 23, 99, 2311 ];

var highestValue = Math.max(...numberArray);

var largest = numberArray[0];

for (i = 0; i < numberArray.length; i++) {
	if (numberArray[i] > largest) {
		largest = numberArray[i];
	}
}

document.write(
	`BASIC EXERCISE 2: <br> This is the solution using a FOR Loop.<br><br>The chosen array is: ${numberArray}.The largest number in the array is: ${largest} <br><br>`
);

document.write(
	`This is the solution using Math.max().<br><br>The chosen array is: ${numberArray}.<br>The highest number in this array is ${highestValue}.`
);
