function saymyname(){
    console.log("M");
    console.log("U");
    console.log("D");
    console.log("I");
    console.log("T");
}

// saymyname()


// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }


// const result = addTwoNumbers(3,4)

// function addTwoNumbers(num1,num2){
//     return num1 + num2
// }


// const result = addTwoNumbers(3,4)

// console.log("Result : ", result)


// function loginUserMessage(username){
//     if(!username){
//         return "Please enter a username"
//     }
//     return `${username} just logged in`
// }   

// console.log(loginUserMessage())


// function calculateCartPrice(...num1){   //rest operator (...)
//     return num1
// }


// console.log(calculateCartPrice(200,300,400,5000))


const user = {
    username:"mudit",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:'399'
})

const newArray = [200,300,400,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray))