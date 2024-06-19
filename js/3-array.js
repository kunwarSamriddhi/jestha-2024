let course = ['mern', 'python', 'webDesign', 'marketing']
course[2] = 'web design'
course[4] = 'qa'
course.push("AI")
console.log(course[2])
console.log(course)

let colorName = "red"
let colorHexValue = '#FF0000'
let colorRGBValue = 'rgb(255,0,0)'

let color = {
    name: "red",
    hexValue: "#FF0000",
    rgbValue: 'rgb(255,0,0)'
}
console.log(color)

let projectorBrand = 'viewsonic'
let projectorColor = 'white'
let projectorPrice = 50000
let projectorWidth = '50cm'
let projectorHeight = '50cm'

/* object
    let v={
       <key>:<value>,
       <property>:<value>,
       <attribute>:<value>
    }
*/
let projector = {
    brand: "viewsonic",
    color: "white",
    price: 50000,
    width: 50,
    height: 50,
    unit: 'cm',
}

let colors = [
    {
        name: 'redddddd',
        hexValue: '#FF0000',
        rgbValue: 'rgb(255,0,0)'
    },
    {
        name: 'green',
        hexValue: '#00FF00',
        rgbValue: 'rgb(0,255,0)'
    },
    {
        name: 'blue',
        hexValue: '#0000FF',
        rgbValue: 'rgb(0,0,255)'
    }
]
colors[0].name = "red"
console.log(colors)

let courses = [
    {
        name: 'MERN',
        startingDate: "2nd June",
        duration: "3 months",
    },
    {
        name: 'Python',
        startingDate: "2nd June",
        duration: "2.5 months",
    },
    {
        name: 'Marketing',
        startingDate: "2nd June",
        duration: "2 months",
    },
]
console.log(courses)

// object inside an array 

let user = [
    {
        name: "ram",
        phoneNum: 9800445566,
    },
    {
        name: "sita",
        phoneNum: 9866778844,
    },
    {
        name: "shyam",
        phoneNum: 9866778844,
    }
]
user[3] =
{
    name: "hari",
    phoneNum: 9800344422,
}
console.log(user)
console.log(user[0].phoneNum)

