let users = [
    {
        name: "ram",
        phoneNum: 9800445566,
        address: "abc",
    },
    {
        name: "hari",
        phoneNum: 9866778844,
        address: "nop",
    },
    {
        name: "shyam",
        phoneNum: 9866778844,
        address: "xyz",
    }
]

/* let genders = ["male", "female", "others"]
let randomGenderIndex = Math.floor(Math.random() * genders.length)
console.log(genders[randomGenderIndex])

let religions = ["hindu", "buddhist", "christian", "muslim"]
let randomReligionsIndex = Math.floor(Math.random() * religions.length)
console.log(religions[randomReligionsIndex]) 

let ages=[20,30,40,50,25] 



users[0].religions = (religions[Math.floor(Math.random() * religions.length)])
users[1].religions = (religions[Math.floor(Math.random() * religions.length)])
users[2].religions = (religions[Math.floor(Math.random() * religions.length)])

users[0].genders = (genders[Math.floor(Math.random() * genders.length)])
users[1].genders = (genders[Math.floor(Math.random() * genders.length)])
users[2].genders = (genders[Math.floor(Math.random() * genders.length)])

users[0].age = Math.floor(Math.random() * 100)
users[1].age = Math.floor(Math.random() * 100)
users[2].age = Math.floor(Math.random() * 100)
 */


let genders = ["male", "female", "others"]
/* let randomGenderIndex = Math.floor(Math.random() * genders.length)
console.log(genders[randomGenderIndex]) */

let religions = ["hindu", "buddhist", "christian", "muslim"]
/* let randomReligionsIndex = Math.floor(Math.random() * religions.length)
console.log(religions[randomReligionsIndex]) */

let ages = [20, 30, 40, 50, 25]
function getRandomValue(arrayType) {
    let randomValue = arrayType[Math.floor(Math.random() * arrayType.length)]
    return randomValue
}

function assignRandomAgeAndReligion(index) {
    users[index].religion = getRandomValue(religions)
    users[index].gender = getRandomValue(genders)
    users[index].age = getRandomValue(ages)
}
assignRandomAgeAndReligion(0)
assignRandomAgeAndReligion(1)
assignRandomAgeAndReligion(2)

console.log(users)

function double(input) {
    let output = input * 2
    return output
}
let doubledValue = double(11)
console.log(doubledValue)
console.log(double(12))

function sum(firstNum, secondNum) {
    let result = firstNum + secondNum
    return result
}
let addition = sum(12, 12)
console.log(addition) 

let difference = (numberOne,numberTwo) => numberOne - numberTwo 

let minus=difference(30,12)
console.log(minus)