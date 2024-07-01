let users = [
    { id: 1, name: "Ram" },
    { id: 2, name: "sita" },
    { id: 3, name: "hari" },
];

let products = [
    { id: 1, name: "keyboard", rate: 100 },
    { id: 2, name: "mouse", rate: 200 },
    { id: 3, name: "watch", rate: 300 },
];

let cartItems = [
    {
        user_id: 1,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 2,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 2,
        product_id: 2,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 1,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 2,
        quantity: 2,
    },
    {
        user_id: 3,
        product_id: 3,
        quantity: 2,
    },
];

/* code here to find the total amount spent by each user */

/*
    ram has bought items worth Rs.200
    sita has bought items worth Rs.600
    hari has bought items worth Rs.1200
*/

function totalAmount(){
    for(let index=0;index<products.length;index++){
       if(products[index].id==cartItems){
            let spentMoney=cartItems[index].quantity*products[index].rate
            return spentMoney
       }
    }
}
// totalAmount()
let amountSpent=totalAmount()
console.log(amountSpent);