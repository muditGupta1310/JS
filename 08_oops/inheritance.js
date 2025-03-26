class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
        
    }

    addCourse(){
        console.log(`A new course was addes by ${this.username}`); 
    }

}


const chai = new Teacher("chai", "chai@chai.com", "123")

chai.addCourse()


const abc = new User("qwerty")

abc.logMe()


console.log(chai instanceof User);
