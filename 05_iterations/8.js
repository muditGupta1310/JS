// const myNums = [1,2,3,4]

// const total = myNums.reduce((acc,c_val) => {
//     console.log(`acc: ${acc} and c_val: ${c_val}`);
//     return acc + c_val
// },0)



// const total = myNums.reduce((acc,c_val) => acc + c_val,0)
// console.log(total);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 9999
    },
    {
        itemName : "data science course",
        price : 8999
    },
    {
        itemName : "dev course",
        price : 29999
    }
]


const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay)