// let myName = "mudit    "

// console.log(myName.truelength);


let myHeros = ["thor","hulk"]

let heroPower = {
    thor : "hammer",
    hulk : "strength",
    
    getHulkPower : function(){
        console.log(`Hulk power is ${this.hulk}`);
    }
}

Object.prototype.mudit = function(){
    console.log(`Mudit is present in all objects`);
}

// heroPower.mudit()

// myHeros.mudit()

Array.prototype.heymudit = function(){
    console.log(`Mudit says hello`);
    
}


// myHeros.heymudit()

// heroPower.heymudit()


const user = {
    name : 'xyz',
    email : 'xyz@gmail.com'
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}

// Teacher.__proto__ = user


let anotherUsername = "qwertyuiop"

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.truelength()

