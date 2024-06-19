
function sum(firstNum, secondNum) {
    let result = firstNum + secondNum
    console.log(`${firstNum}+${secondNum}=${result}`)
}
sum(10, 30)

let person="ram"
let message=`${person} said,"I am going to the pool".`
console.log(message) 

let users=[
    {
        name: "ram",
        phoneNum: 9800445566,
        address:"abc",
    },
    {
        name: "hari",
        phoneNum: 9866778844,
        address:"nop",
    },
    {
        name: "shyam",
        phoneNum: 9866778844,
        address:"xyz",
    }
]
let genders=["male","female","others"]
let religions=["hindu","buddhist","christian","muslim"]

function displayUserInfo(user){
    console.log(`${user.name}'s phone number is ${user.phoneNum}`)
    let indexRandom=(Math.floor(Math.random()*genders.length))
    console.log(`${user.name}'s gender is ${genders[indexRandom]}`)
    console.log(`${user.name}'s religion is ${religions[indexRandom]}`)
}
displayUserInfo(users[0])
displayUserInfo(users[1])
displayUserInfo(users[2])
displayUserInfo({ name:"rita", phoneNum:9898989898})
displayUserInfo({
    name:"sita",
    phoneNum:9898873654,
    address:"hyh"
})


function gendersRandom(){
    console.log(genders[(Math.floor(Math.random()*genders.length))])
}

gendersRandom()

Math.random()  // 0 to 1 
Math.floor()   //1.2=>1

function religionsRandom(){
    index=(Math.floor(Math.random()*religions.length))
    console.log(religions[index])
}
religionsRandom()