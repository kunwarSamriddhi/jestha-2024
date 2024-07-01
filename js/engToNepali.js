let dashboard = {
    total: 100,
    expired:24,
    out_of_stock:20
}

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 
__________________________________________________________________________________________________

You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function

OUTPUT SHOULD BE AS BELOW

    dashboard = {
        total: "१००"
        expired: "२४",
        out_of_stock: "२०"
    }

    
*/
let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

function convertEngDigitToNepali(input){
    let output=''
    input=input.toString()
    let inputArray=input.split("")
    for(let index=0;index<inputArray.length;index++){
        let number=inputArray[index]
        output=output + nepali_digits[number]
    }
    return output
}

dashboard = {
    total: convertEngDigitToNepali(100),
    expired:convertEngDigitToNepali(24),
    out_of_stock: convertEngDigitToNepali(20)
}
console.log(dashboard);