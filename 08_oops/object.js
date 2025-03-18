function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);


function createUser(username, score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
    
}

const u1 = new createUser("u1", 25)

const u2 = new createUser("u2", 12)


u1.printme()