console.log("array");
const sum = (num1, num2) => {
    return num1 + num2
}

// for(let i=0;i<10000;i++){
//     console.log(i);
// }
console.log(sum(12, 24));


// function doSomething() {
//     console.log("do something");
// }
setTimeout(()=>{
     console.log("do something")
}, 3000)

/* asynchronous
    -runs in background
    -doesn't block the following codes

*/
// setTimeout(doSomething,4000)

/* array functions
    push
    pop
    forEach()
*/
// let users=["ram","hari","shyam"]
let users = [
    { name: "ram", age: 10 },
    { name: "hari", age: 20 },
    { name: "shyam", age: 18 },
    { name: "sita", age: 40 },
    { name: "gita", age: 50 }
]
let childrens = []
let adults = []
users.forEach((user) => {
    if(user.age<20){
        childrens.push(user)
    }else{
        adults.push(user)
    }
})
console.log(childrens);
console.log(adults);
// age<20
for (let index = 0; index < users.length; index++) {
    console.log(`The age of ${users[index].name} is ${users[index].age}`);
}

/* users.forEach((element)=>{
    console.log("do something for user",element.name);
}) */

users.forEach((element) => {
    console.log(`${element.name}'s age is ${element.age}`);
})

let childs= users.filter((element)=>{
    if(element.age<=18){
        return true
    }
})
console.log(childs);
let otherAdults= users.filter((element)=>{
    if(element.age>18){
        return true
    }
})
console.log(otherAdults);

/*  .map
    .find
*/ 