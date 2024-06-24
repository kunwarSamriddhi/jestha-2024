/* LOGICAL OPERATORS
    && gives true if all conditions are true
    || gives true only if one of the conditions is true 
*/


let user = {
    name: "Ram",
    paidStatus: true,
    hasScholarship: true,
    hasMetAttendance: true,
    gender: "male",
    email: "ram@ram.com",
    password: "password",
}

function login(email, password) {
    if (email == user.email && password == user.password) {
        console.log(`${user.name} has logged in.`)
    } else {
        console.log(`Incorrect email or password.`)
    }
}
login("ram@ram.com", "password")

let genderPrefix = "Mr."
if (user.gender = "female") {
    genderPrefix = "Mrs."
} else if (user.gender = "male") {
    genderPrefix = "Mr."
} else {
    genderPrefix = "Mr./Mrs."
}

if ((user.paidStatus || user.hasScholarship) && user.hasMetAttendance) {
    console.log(`${genderPrefix}${user.name} can give exam`)
} else {
    console.log(`${genderPrefix}${user.name} can not give exam`)
}