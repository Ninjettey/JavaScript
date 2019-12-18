// Numbers
// numbers and be computed with +, -, *, /, %, ++ increment, -- decrement
// NaN means Not a Number
var pizza = 5;
var soda = 1;
var bread = 3;

var total = pizza + soda;

console.log(total);

/**
 * The console .log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
 */

 // String

 const name = 'Jennifer White';

 const welcome = 'Welcome to Geekwise Academy';

 console.log(name);
 console.log(welcome);

 // Array
 var fruit = ['apples', 'grapes', 'oranges', 'bananas'];
 var rockBand = ['Motionless in White', 'In This Moment', 'New Years Day', 'Hollywood Vampires'];

 console.log(fruit);
 console.log(rockBand);

 // Object

 var car = {
     type: "Fiat",
     model: "500",
     color: "white"
 };

console.log(car);

// Boolean
// everything with a real value is true 0, null, undefined is false
// comparison operators always return true or false ==, ===, !=, !==, !===, <, >, <=, >=, && AND, || OR, ! NOT
const present = true;
const asbent = false;
Boolean(present);
console.log(present);
// Undefined
var cat = ['Tabby', 'Calico', 'Tiger', 'Lion']
console.log(cat);
// Null
var person = {firstName: "Jennifer", lastName: "White", age:38, eyeColor:"Brown"};
person = null;    // Now value is null, but type is still an object
console.log(person);
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
document.write('Hello World');

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// command question mark is a single line comment

var favoriteMovie ='My favorite movies Harry Potter series'
document.write(favoriteMovie);
