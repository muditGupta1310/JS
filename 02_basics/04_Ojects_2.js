const tinder = new Object()

console.log(tinder);

tinder.id = "123abc"

tinder.user = "mudit"

tinder.isLoggedIn = false


const user = {
    email : "some@gmail.com",
    fullname:{
        usrname : {
            firstname : "Mudit",
            lastname : "Gupta"
        }
    }
}
// console.log(user.fullname.usrname.firstname);

const obj1 = {1:"a",2:"b"}

const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}

// console.log(obj3);


// const obj4 = Object.assign({},obj1,obj2)

// console.log(obj4);


// const obj5 = {...obj1,...obj2}
// console.log(obj5);



const usr = [
    {
        id : 1,
        email: "mudit@google.com"
    },
    {
        id : 1,
        email: "mudit@google.com"
    }
]



// console.log(usr[1]);

// console.log(tinder);

// console.log(Object.keys(tinder));

// console.log(Object.values(tinder));

// console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));



