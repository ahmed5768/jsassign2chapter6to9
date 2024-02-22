// increment decrement
document.write ("<h1>increment decrement</h1>");
var a = 10;
console.log(++a);

console.log(a++);
console.log(a);

console.log(--a);

console.log(a--);
console.log(a);
document.write ("The value of a is: " + a + "</br>");

// B,C Result
document.write ("<h1>B,C Result</h1>");
var b = 2;
var c = 1;

--b;
// B value is; 1

--b - --c;
// B and C value is; 0

--b - --c + ++c;
// B and C value is; 0

var result = --b - --c + ++c + c--;
// B and C value is; -1

document.write ("B is; " + b + "</br>");
document.write ("C is; " + c + "</br>");
document.write ("Result is; " + result + "</br>");

// marksheet
var subject1 = prompt("Subject 01")
console.log(subject1);

var subject1Marks = +prompt ("How much do you obtained marks in " + subject1 + " Out of 100");
console.log(subject1Marks);

var subject2 = prompt("Subject 02")
console.log(subject2);

var subject2Marks = +prompt ("How much do you obtained marks in " + subject2 + " Out of 100");
console.log(subject2Marks);

var subject3 = prompt("Subject 03")
console.log(subject3);

var subject3Marks = +prompt ("How much do you obtained marks in " + subject3 + " Out of 100");
console.log(subject3Marks);

var totalMarks = subject1Marks + subject2Marks + subject3Marks;
console.log("You Obatined " + totalMarks + " Out of 300 In All Subject");

var percentage = totalMarks * 100 / 300;
console.log("Your Percentage Is " + percentage + "%");

document.write ("<h2>Subjects TotalMarks ObatinedMarks Percentage</h2>")
document.write (subject1 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100  \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" + subject1Marks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" + subject1Marks + "% </br>" );

document.write (subject2 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100  \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" + subject2Marks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" + subject2Marks + "% </br>");

document.write (subject3 + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 100  \xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0 \xa0 \xa0 \xa0" + subject3Marks + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0 \xa0" + subject3Marks + "% </br>");

document.write( "\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 300 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0     " + totalMarks + "\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 \xa0\xa0 \xa0\xa0\xa0\xa0\xa0 " + percentage + "%" );