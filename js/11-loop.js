let users = ["ram", 'shyam', 'hari']

// for (let index = 0; index < users.length; index++) {
//     console.log(users[index])
// }

let persons = [
    { name: "ram", age: 10, gender: "male" },
    { name: "shyam", age: 20, gender: "male" },
    { name: "hari", age: 15, gender: "male" },
    { name: "gita", age: 30, gender: "female" },
]
// for (let index = 0; index < persons.length; index++) {
//     if(persons[index].gender=="female"){
//         console.log(`Mrs.${persons[index].name}'s age is ${persons[index].age}`)
//     }else{
//         console.log(`Mr.${persons[index].name}'s age is ${persons[index].age}`)
//     }
// }  
for (let index = 0; index < persons.length; index++) {
    // let genderTag = (persons[index].gender == "male") ? "Mr." : "Ms."
    // let person = persons[index]
    let { name, age, gender } = persons[index] //object destructuring 
    console.log(`${gender == "male" ? 'Mr.' : 'Mrs.'}${name}'s age is ${age}`)
}

function findMultiplication(multiple){
    let {number,startFrom,endAt}=multiple
    for(let i=startFrom;i<=endAt;i++){
        console.log(`${number}*${i}=${number*i}`)
    }
}

findMultiplication({
    number:5,
    startFrom:1,
    endAt:10
})