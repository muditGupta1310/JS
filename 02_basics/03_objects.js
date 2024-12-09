// signleton
// Object.create

//object literals

const mySym = Symbol("key1")

const user= {
    name: "Mudit",
    "full name": "Mudit Gupta",
    // myS : mySym,
    [mySym] : "mykey1",
    age:25,
    location:"delhi",
    email:"mudit@google.com",
    isLoggedIn : true,
    lastLogin: ["Monday","Saturday"]
}

// myArray = ["h","i"]


// console.log(user["full name"]);

// console.log(typeof(user[mySym]));

// console.log(user)

user.greeting = function(){
    console.log("Hello user")
}

user.greeting2 = function(){
    console.log(`Hello user ${this.name}`)
}



// console.log(user.greeting());

// console.log(user.greeting2());

