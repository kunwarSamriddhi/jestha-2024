
/* let a = 1
let b = 2
console.log('The sum of ' + a + ' and ' + b + ' is ' + (a + b)) */

let firstNum = 4
let secNum = 10
let result = firstNum + secNum
console.log('The sum of ' + firstNum + ' and ' + secNum + ' is ' + result)

let fullName = "Ram" + "Bahadur"
console.log(fullName)

function calcDouble(input) {
    console.log(input + ' x ' + input + ' = ' + input * input)
}

calcDouble(2)
calcDouble(9)
calcDouble(3)
calcDouble(4)

function sum(x, y) {
    console.log(x + ' + ' + y + ' = ' + (x + y))
}
sum(3, 4)

/* template literal(template string)
   #Example:
        let apple="world"
        let message=`hello,${apple}`
        console.log(message)
*/
// return in function

let person="ram"
let message=`${person} said,"I am going to the pool".`
console.log(message) 

let people=[
    {
        name: "ram",
        phoneNum: 9800445566,
    },
    {
        name: "hari",
        phoneNum: 9866778844,
    },
    {
        name: "shyam",
        phoneNum: 9866778844,
    }
]

function peopleData(index){
    console.log(`${people[index].name}'s phone number is ${people[index].phoneNum}`)
}

peopleData(0)
peopleData(1)
peopleData(2)

/* console.log(user[index].name+"'s phone number is ",user[index].phoneNum) */