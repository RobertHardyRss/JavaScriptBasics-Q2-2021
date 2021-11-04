// variables are named containers for stuff

// let is a keyword to declare variables
// age is the name of my variable
// 16 is the value assigned to variable age
let age = 16; // the data type of age is a number
let fullName = "Robert Hardy"; // the data type of fullName is string

let isActive = true; // the data type of isActive is boolean (true or false)

age = "16"; // age is now a string
age = false; // age is a boolean

const MAX_AGE = 200;

// reassigning a vlaue to a constant will throw an erro, so the
// next line will not work!
//MAX_AGE = 100;

// using var to declare variables, will make this variable visible
// at the "global scope".  This is called "hoisting".  Using var
// provides no protection to our variable, and it can be redeclared
// any where in our program, without throwing an error
var foo = 16;
let bar = 10;

console.log(foo, bar);
// logs out 16 10

// Starting a new scope here.
{
	// inside of a new scope, I can safely redeclare
	// variables declared with "let" without a problem
	// and they will only be visible in this new scope
	let bar = 20;

	// inside this new scope, I can redeclare variables
	// declared with "var", but it will overwrite the value I set
	// in the outer scope.  This is the problem with var, it does not
	// honor "scope boundaries"
	var foo = 40;

	console.log(foo, bar);
	// logs out 40 20
}
// leaving the new scope here

// now I am once again at the global scope, and I see me old value
// for bar as I can no longer "see" the version declared in the
// inner scope above.  My value declared with var, however, has been
// overridden by the assignment in the inner scope.
console.log(foo, bar);
// logs out 40 10

// I can again redeclare foo because var is crazy
var foo = 200;
// but this line will throw an error because "let" is better and protects us!
//let bar = 50;

// Arrays are a list like construct.  They are variables that
// can hold multiple different values that can be accessed
// by an index.
// names is an array of string values
let names = ["Austin", "Andrew", "Priya"];

// we can access a specific name in our list of names by
// specifying an index.  Array indexes start at zero,
// so this will outout the second value in our index
// which is "Andrew"
console.log(names[1]);
// Andrew will output to the console

// ages is an array of numbers
let ages = [16, 15, 15];
console.log("%s is %d years old", names[1], ages[1]);

// objects are a type of variable that can encapsulate
// data, called "properties", and functionality, called "methods"
// game is an object that has two properties, score and isOver,
// and one method, displayScore()
let game = {
	score: 0,
	isOver: false,
	displayScore: function () {
		return "Current Score is " + this.score;
	},
};

// log out the object
console.log(game);
// log out the output from our displayScore method
console.log(game.displayScore());

// update the isOver property of our game object and set it to true
game.isOver = true;
// log out the object
console.log(game);

// functions are also a type of variable.  Functions
// allow us to define a set of instructions and give it a
// name.  We can define what parameters are passed to our
// function and do things with the parameters inside the
// body of our funtion.
let add = function (num1, num2) {
	return num1 + num2;
};

// take the output of our add function and assign it to the variable called sum
let sum = add(3, 10);
console.log(sum);
