const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

const chai = {
    name : "abc",
    price:250,
    isAvailable : true,

    orderChai : function(){
        console.log("Chai n code");
        
    }
}


// console.log(chai);


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable : false
})


// console.log(chai.name);

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} ; ${value}`); 
    }
}









