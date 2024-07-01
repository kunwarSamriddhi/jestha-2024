const nepaliNames=["Aarav","Aarya",'Aasha','Anisha']
let users=[]
for(let index=0;index<nepaliNames.length;index++){
    users[index]={
        name:`${nepaliNames[index]}`,
        email:`${nepaliNames[index]}@gmail.com`,
        password:`${nepaliNames[index].toLowerCase()}${index}`
    }
}
console.log(users);

/*
    arrow function
*/
function doubleOld(input){
    return input*2
}
const double=(input)=>{ 
    return input * 2
}
console.log(double(100));

const difference=(num1,num2)=>{
    return num1-num2
}
console.log(difference(100,50));

/* asnychronous ,timer,

    callback function
        a function passed as an arguement to another function    
*/
const showPopUp=()=>{
    console.log("show popup");
}
setTimeout(showPopUp,3000)