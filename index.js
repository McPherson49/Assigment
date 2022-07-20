// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223
let goodness = [32243] ;
let aji=goodness.reverse();
let efe = aji.join();
console.log (aji);

// Write a JavaScript function that checks whether a passed string is palindrome or not?
function dome (input) {
  if ( typeof(input) === 'string') {
    input = input.toLowerCase().replace (/[^A-Za-z0–9]/g)
    return input === input.split('').reverse().join('')
  }
  else {
    return input.toString() === input.toString().split('').reverse().join('')
  }
}
console.log(dome(10110));
console.log(dome('nurses run'));
console.log(dome('madam')); 


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

var peter = prompt(" Enter your word ");
var arr = peter.split(" ");
for (var i=0; i< arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var peter2 = arr.join (" ");
console.log(peter2)


// Write a JavaScript program to find the most frequent item of an array.
 
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }

  m = 0;
}

alert(item + " ( " + mf + " times ) ");

// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
       alert("The sign is +");
}
else if (x<0 && y<0 && z<0)
        {
          console.log("The sign is -");
        }
        else if (x>0 && y<0 && z<0)
        {
          console.log("The sign is +");
        }
        else if (x<0 && y>0 && z<0)
        {
          console.log("The sign is +");
        }
        else
        {
          console.log("The sign is -");
        }
        
// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
let a= -5
b = -2
c = -6
d = 0
e = -1 
if (a>b && a>c && a>d && a>e) {
    alert (a)
}
if (b>a && b>c && b>d && b>e) {
    alert (b)
}
if (c>b && c>a && c>d && c>e) {
    alert (c)
}
if (d>b && d>c && d>a && d>e) {
    alert (d)
}
if (e>b && e>c && e>d && e>a) {
    alert (e)
}


// How to write a
function square(a,b,c){
  let x = (-b + Math.sqrt(b**2 - 4*a*c))/2*a;
  let y = (-b - Math.sqrt(b**2 - 4*a*c))/2*a;
  console.log (x,y);
}
square(1,-6,-16);

// Write a function that calculate the equation of a line and the result is in form of a strings
function line(x1,x2,y1,y2) {
  let m = (y2-y1)/(x2-x1);
  var c = -(m*x1)+y1;
  // let y = m + c;
  console.log(`y=${m}x + ${c}`);
}
line (1,-2,3,4);









