/* global variable */
let name = "ram"
let age = 12
let number = 100

function doSomething() {
    let number = 111 //this is block scope variable,only available inside this function
    age = 33 //since we havent used let keyword,it updated the variable 
    console.log("number inside", number)
    console.log("age inside", age)
}
doSomething()
console.log("number outside", number)
console.log("age outside", age)

function double(input) {
    let output = input * 2 /* output is a block scope variable */
    console.log(output);
}
double(100)

function triple(input) {
    let output = input * 3
    console.log(`triple of ${input} is ${output}`);
}
triple(12)