

let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "dz",
        "name": "Algeria",
        "path": "algeria"
    },
    {
        "code": "as",
        "name": "American Samoa",
        "path": "americansamoa"
    },
    {
        "code": "ad",
        "name": "Andorra",
        "path": "andorra"
    },
    {
        'code': "np",
        'name': "Nepal",
        'path': "nepal",
    },
]

/* 
    find the cods of a specific country 
    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/
/* 
 array functions    
*/

function findCountryCode(countryName) {
    for (let index = 0; index < countries.length; index++) {
        let countryObj = countries[index]
        if (countryObj.name == countryName) {
            return countryObj.code
        }
    }
    return 'not found'
}

let nepalcode = findCountryCode("Nepal")
console.log("Nepalcode", nepalcode)
console.log({ nepalcode:nepalcode })
console.log({ nepalcode })