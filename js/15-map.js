let users = [
    { name: "ram", age: 10 },
    { name: "hari", age: 20 },
    { name: "shyam", age: 18 },
    { name: "sita", age: 40 },
    { name: "gita", age: 50 }
]
/* let adults = users.filter((element) => {
    if (element.age > 18)
        return true
}) */

let adults = users.filter(element => { return element.age > 18 ? true : false })
console.log(adults);

let children = users.filter(element=>{return element.age <= 18 ? true:false})
console.log(children);

const double = input => input * 2
console.log(double(11));

const sum = (input1, input2) => input1 + input2
console.log(sum(37, 12));

const nepaliNames=["Aarav","Aarya",'Aasha','Anisha']
const fakeUsersOld = nepaliNames.map((element,index)=>{
    return {
        name:element,
        password:element+index,
        email:`${element}@gmail.com`
    }
})

const fakeUsers = nepaliNames.map((el,index) => ({
    name:el,
    email:`${el}@gmail.com`,
    password:el+index
}))
console.log({fakeUsers})