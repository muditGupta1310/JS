// +++++++++++++++++++++++++

// Stack Memory & Heap Memory


// Stack Memory is used in Primitive Datatype

// Heap <eamory is used in Non Primitive Datatype

let myName = "Mudit"
let another = myName


another = "Gupta"

console.log(myName)

console.log(another)


let user1 = {
    email:"abc",
    upi:"09876"
}

let user2 = user1

user2.email = "yhn"

console.log(user1)