console.log('conditional sentences');

/*  
   if (<condition>){
     //do something
   }else {
     //do something
   }

*/

let willRain = false
let hasProbability = true
if (willRain) {
    console.log('take umbrella')

} else {
    if (hasProbability) {
        console.log('you might need umbrella')
    }
    else {
        console.log('no need to take umbrella')
    }
}

if (willRain) {
    console.log('take umbrella')
} else if (hasProbability) {
    console.log('you might need umbrella')
} else {
    console.log('no need to take umbrella')
}

/* ternary operator */
let output = (10 > 25) ? true : false
console.log(output);