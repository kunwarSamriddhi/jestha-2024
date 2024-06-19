// object inside an object:

let color = {
    name: 'red',
    hexValue: '#FF0000',
    rgbValue: {     // rgbValue:'rgb(255,0,0)',
        red: 255,
        green: 0,
        blue: 294511,
    },
    Name: 'reddddd'
}
color.Name = 'RED'
color.rgbValue.blue = 0
console.log(color)


let user = [
    {
        name: "ram",
        phoneNum: 9800445566,
        address:{
            permanent:{
                name:'jhapa',
                wardNo:15,
            },
            temporary:{
                name:'dadeldhura',
                wardNo:6,
            },
        }
    },
    {
        name: "prabesh",
        phoneNum: 9866778844,
        address:{
            permanent:{
                name:'pokhara',
                wardNo:5,
            },
            temporary:{
                name:'khotang',
                wardNo:1,
            },
        }
    },
    {
        name: "shyam",
        phoneNum: 9866778844,
        address:{
            permanent:{
                name:'dhading',
                wardNo:15,
            },
            temporary:{
                name:'gulmi',
                wardNo:15,
            },
        }
    }
]
user[3] =
{
    name: "hari",
    phoneNum: 9800344422,
    address:{
        permanent:{
            name:'pokhara',
            wardNo:2,
        },
        temporary:{
            name:'kathmandu',
            wardNo:8,
        },
    }
}
user[0].address.temporary.wardNo=3
user[0].address.temporary.streetName='jxns'
console.log(user)

function userData(index){
    console.log(user[index].name,"temporarily lives in",user[index].address.temporary.name,"but his permanent address is",
        user[index].address.permanent.name)
}

userData(0)
userData(1)
userData(2)
userData(3)
