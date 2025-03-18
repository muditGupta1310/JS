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

heroPower.mudit()