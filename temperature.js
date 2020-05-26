let range = Math.floor(Math.random() * 39);

let degrees = [
	'-5',
	'-4',
	'-3',
	'-2',
	'-1',
	'0',
	'1 ',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'13',
	'14',
	'15',
	'16',
	'17',
	'18',
	'19',
	'20',
	'21',
	'22',
	'23',
	'24',
	'25',
	'26',
	'27',
	'28',
	'29',
	'30',
	'31',
	'32',
	'33'
];

let temperature = degrees[range];
var pic = document.createElement('img');
console.log(temperature);
let msg = '';

if (range <= 15) {
	msg = `The weather is cold.`;
	document.getElementById('weather').src = 'cold.png';
} else if (range >= 31) {
	msg = 'The weather is hot.';
	document.getElementById('weather').src = 'hot.png';
} else {
	msg = 'The weather is moderate.';
	document.getElementById('weather').src = 'moderate.png';
}

document.write(`Todays temperature is: ${temperature}°C <br> ${msg}`);
