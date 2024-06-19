/* data types
   string
   number:int and float
   boolean
   undefined
   null

   n-primitive(collections) data types:
   array
   object
*/

let color = "red"
color = "Red"

const role = 'visitor'
// role="admin" not possible

/* 
  array
  -collection of multiple values
  -always has index starting from 0
  -collection of similar datatypes
*/
let fruits = ['apple', 'banana', 'mango', 'kiwi']
fruits[1] = "orange"
console.log(fruits)

let evenNumber = [2, 4, 6, 8, 10,"twelve"]
console.log('before',evenNumber[5])
evenNumber[5]=12
console.log('after',evenNumber[5])
console.log(evenNumber)

let statuses = [true, false, false, true]

let people=[
  {
   name:"ram",
   phoneNum:9800445566,
  },
  {
    name:"sita",
    phoneNum:9866778844,
  },
  {
    name:"shyam",
    phoneNum:9866778844,
  }
]
people[3]=
 {
  name:"hari",
  phoneNum:9800344422,
 }
console.log(people)
console.log(people[0].phoneNum)