let user = {
    name: "sita",
    paidStatus: false,
    hasScholarship: false,
    gender: "female",
}
let post = (user.gender == "male") ? "Mr." : "Ms."


if (user.paidStatus) {
    console.log(`${post}${user.name} can give exam`)
} else if (user.hasScholarship) {
    console.log(`${post}${user.name} can give exam`)
} else {
    console.log(`${post}${user.name} can not give exam`)
}

/* if(user.gender=="female"){
    if (user.paidStatus) {
        console.log(`Ms.${user.name} can give exam`)
    }else if (user.hasScholarship) {
        console.log(`Ms.${user.name} can give exam`)
    }else {
        console.log(`Ms.${user.name} can not give exam`)
    }
}else{
    if (user.paidStatus) {
        console.log(`Mr.${user.name} can give exam`)
    }else if (user.hasScholarship) {
        console.log(`Mr.${user.name} can give exam`)
    }else {
        console.log(`Mr.${user.name} can not give exam`)
    }
} */

/* operator
   arithmetic operators:
   +, -, *, /, %, ++, --, 
   ++ count //pre increment
   count ++ //post increment
   comparison operators:
   <, >, <=, >=, 
   == //equality operator
*/

let number = 100
double(++number)
let input = 100
double(input++);