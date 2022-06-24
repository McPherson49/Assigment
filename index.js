// question 1
let goodness = [32243] ;
let aji=goodness.reverse();
let efe = aji.join();
console.log (aji);

// question 2
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


// question 3
var peter = prompt(" Enter your word ");
var arr = peter.split(" ");
for (var i=0; i< arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
var peter2 = arr.join (" ");
console.log(peter2)


// question 5 
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

// question 6
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
        
// question 7
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




