

var student = [
    ['Martin',76],
    ['Thomas',85],
    ['Klaus',65],
    ['Maria',93],
    ['David',81]
];


for (a = 0; a < student.length; a++){

        if(student[a][1] < 60)
        {
            document.write(student[a][0]+ ' got an F<br>');
        }
        else if(student[a][1] < 70)
        {
            document.write(student[a][0]+' got an D<br>');
        }
        else if(student[a][1] < 80)
        {
            document.write(student[a][0]+' got an C<br>');
        }
        else if(student[a][1] < 90)
        {
            document.write(student[a][0]+' got an B<br>');
        }
        else if(student[a][1] < 100)
        {
            document.write(student[a][0]+' got an A<br>');
        }
};



var studentsum = 0;

for(a = 0; a < student.length; a++){

    studentsum += student[a][1];
    
};

var avrg = studentsum / student.length;


        if(avrg < 60)
        {
            document.write('This class has an average score of ' +avrg+ ' so they get an F')
        }
        else if(avrg < 70)
        {
            document.write('This class has an average score of ' +avrg+ ' so they get an D')
        }
        else if(avrg < 80)
        {
            document.write('This class has an average score of ' +avrg+ ' so they get an C')
        }
        else if(avrg < 90)
        {
            document.write('This class has an average score of ' +avrg+ ' so they get an B')
        }
        else if(avrg < 100)
        {
            document.write('This class has an average score of ' +avrg+ ' so they get an A')
        };

