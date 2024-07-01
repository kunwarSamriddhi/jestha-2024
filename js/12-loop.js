
function findMultiplication(params) {
    let { number, startFrom, endAt } = params
    console.log(`Find multiplication of ${number}`);
    for (let index = startFrom; index <= endAt; index++) {
        console.log(`${number} * ${index} = ${number * index}`);
    }
}
findMultiplication({
    number: 5,
    startFrom: 1,
    endAt: 5
})

let numbers = [1, 2, 3, 4, 5, 6]
function doubled(num) {
    let doubledNum=[];
    for (let index = 0; index < num.length; index++) {
        doubledNum[index] = num[index] * 2
    }
    return doubledNum
}
let doubledNumbers = doubled(numbers)
console.log(doubledNumbers);

/* 
 sum(1,2)
 sum(1,2,3)
 sum(10,20,30,40,50)

rest operator 
*/

function sum(...rest){
    let output=0
    for(let index=0;index<rest.length;index++){
        output=output+rest[index]
    }
    return output  
}

// sum.array.forEach((element) => {

// });
console.log(sum(10,20,30,40,50));