let students = [ [ 'Martin', 76 ], [ 'Thomas', 85 ], [ 'Klaus', 65 ], [ 'Maria', 93 ], [ 'David', 81 ] ];

for (a = 0; a < students.length; a++) {
	if (students[a][1] < 60) {
		{
			document.write(students[a][0] + ' got a F<br>');
		}
	} else if (students[a][1] < 70) {
		{
			document.write(students[a][0] + ' got a D<br>');
		}
	} else if (students[a][1] < 80) {
		{
			document.write(students[a][0] + ' got a C<br>');
		}
	} else if (students[a][1] < 90) {
		{
			document.write(students[a][0] + ' got a B<br>');
		}
	} else if (students[a][1] <= 100) {
		document.write(students[a][0] + ' got an A<br>');
	}
}

let classPoints = 0;
for (let k = 0; k < students.length; k++) {
	classPoints += students[k][1];
}
let classAverage = Math.floor(classPoints / students.length);
let grade = '';
if (classAverage < 60) {
	grade = 'F';
} else if (classAverage < 70) {
	grade = 'D';
} else if (classAverage < 80) {
	grade = 'C';
} else if (classAverage < 90) {
	grade = 'B';
} else {
	grade = 'A';
}

document.write(`<br>The class avergage is ${classAverage} points. The class grade is ${grade}.`);
