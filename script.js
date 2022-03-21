// console.log('hello world 👋')
// this is a comment

/*
this is a multiline comment
here is another line
*/

// console.log('hello world 👋')
// console.table([2, 4, 6])

// variables
// named storage

// declare a variable
let user;
// assign a value to the variable
user = 'jonas'

// more common to do it in one line
// let user = 'jonas'
// console.log(user)

// declare multiple variables in one line
let cat, dog;
// console.log(cat, dog)

// const - cannot be reassigned 
// use camelCase
const userName = 'foo'
// userName = 'bar' -> ❌
console.log(userName)
// const mouse; -> ❌

// use const whenever possible

// Data types
// there are primitive data types and objects
// primitives: string, number, boolean, null, undefined, symbol

// JS is dynamically typed - alternative would be 
// strictly typed (Java, TypeScript)
let num = 23;
console.log(typeof num)
num = '23'
console.log(typeof num)

// number
const distance = 9000;
const price = 19.99;

console.log(distance * 2)

console.clear()

// mathematical operators
// + addition
// - subtraction
// / division
// * multiplication

const sum = 3 + 6
console.log(sum)

// modulo
const result = 8 % 2
console.log(result)

console.clear()

// shorthand writing
let x = 0
x = x + 1
x = x + 1
// shorter
x += 1
x++ // x = x + 1

console.log(x++)
console.log(x)

console.clear()

// Strings - sequence of characters
let greeting = 'hello'

const chars = '!!!'
// string concatenation
console.log(greeting + ' ' + chars)

// same with backticks
console.log(`${greeting} ${chars}`)

// accessing characters in a string
console.log(greeting[1]) // -> e
console.log(greeting.charAt(0)) // -> h 

// string properties
console.log(greeting.length)

// get the last char of a string
greeting = 'fjdj'
console.log(greeting[greeting.length - 1])
console.clear()
// indexOf -> 
console.log(greeting.indexOf('j'))

console.clear()
// slice() -> returns a substring within a given range 

const res = greeting.slice(0, 3)
console.log(res)

console.clear()
// toUpperCase()

let username = 'jonas'
// strings are immutable -> you have to reassign it
// username = username.toUpperCase()
// console.log(username.toUpperCase())
// console.log(username)

// write some logic so that username is changed to
// Jonas
// toUpperCase() slice() charAt()

// let username = 'jonas'
// access the first character
// turn this to uppercase
// get the rest of the string starting at index 1
// add these two strings together

const firstLetter = username[0].toUpperCase()
const restOfTheWord = username.slice(1)

username = firstLetter + restOfTheWord
// username = `${username[0].toUpperCase()}${username.slice(1)}`


console.log(username) // -> Jonas

// undefined and null 
// undefined is the unintentional absence of a value
// null is the intentional absence of a value

// boolean -> either true or false

// boolean statement 
console.log(4 > 4)
// logical operators
// < / > / <= / >=
console.clear()
// check for equality
const number = 8
// strictly equal
console.log(number === 5)
console.log(number == 5)
// number is not equal to 5
// not equal: !== / !=
// console.log(number != 5)
// console.log(number == 5)

// && - logical and / || logical or
// is number larger than 5 and even
console.log(number > 5 && number % 2 === 0)
// is number larger than 5 or even
console.log(number > 5 || number % 2 === 0)



// conditionals

if (number > 5 && number % 2 === 0) {
	// this is executed if the statement is true 
	console.log('it is true')
}

// truthy and falsy values
// falsy values are : empty string, 0, false, NaN, null, undefined
let password = ''
// check if password is set
if (password === '') {
	console.log('not set')
} else {
	console.log('it is set')
}

console.clear()

// const age = Number(prompt('what is your age?'))
// console.log(typeof age)
// if (age > 18) {
// 	console.log('you can drive')
// } else if (age === 17) {
// 	console.log('you can drive with an adult')
// } else {
// 	console.log('you are too young to drive')
// }

console.clear()

// switch case

// const language = prompt('what is your language?')
// switch (language) {
// 	case 'french':
// 		console.log('bonjour')
// 		break;
// 	case 'english':
// 		console.log('hello')
// 		break;
// 	case 'german':
// 		console.log('guten tag')
// 		break;
// 	default:
// 		console.log('language not recognized')
// }

console.clear()

// loops
// log the numbers from 1 to 10
// for (let i = 1; i < 11; i++) {
// 	console.log(i)
// }

// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)
// 	console.log(i)

// while loop
// let i = 1
// while (i < 11) {
// 	console.log(i)
// 	i++
// }

let userPassword;
// show the prompt - is the password correct? if not
// show the prompt again
//
while (userPassword !== '123') {
	userPassword = prompt('what is the password')
}
alert('access granted 🙂')