let user = {
    name: "Ram",
    paidStatus: false,
    hasScholarship: false,
    gender: "male",
}
let tag = (user.gender == "male") ? "Mr." : "Ms."


if (user.paidStatus) {
    console.log(`${tag}${user.name} can give exam`)
} else if (user.hasScholarship) {
    console.log(`${tag}${user.name} can give exam`)
} else {
    console.log(`${tag}${user.name} can not give exam`)
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

   logical operators:
   &&, ||, !,
*/
user.hasScholarship = true

if (user.gender == "female") {
    if (user.paidStatus || user.hasScholarship) {
        console.log(`Ms.${user.name} can give exam`);
    } else {
        console.log(`Ms.${user.name} can not give exam`);
    }
} else {
    if (user.paidStatus || user.hasScholarship) {
        console.log(`Mr.${user.name} can give exam`);
    } else {
        console.log(`Mr.${user.name} can not give exam`);
    }
}



// let number = 100
// double(++number)
// let input = 100
// double(input++);