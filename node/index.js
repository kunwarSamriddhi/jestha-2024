/* global objects 
    console.log
    setTimeout
    __filename
    __dirname
    modules
    require
*/
/* node modules 
    core 
    third party
    local
*/
console.log("connected: node > ide.js");
// document.getElementsByTagName("h1")[0].style.color=Red
let dbUsers = []

const bcrypt = require('bcrypt');
const saltRounds = 10;

function signup(username, password) {
    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
     console.log("signup",hash);
     dbUsers.push({
        username,
        password:hash
     })
    })
}
signup("ram", "secret")
signup("shyam", "secret")
signup("hari", "secret")