function SetUserName(username){
    // complex calculation
    this.username = username
    console.log("called");
    
}

function createUser(username,email, password){

    SetUserName.call(this,username)
    this.email = email
    this.password = password
}

const chai = new createUser("mudit","mudit@gmail.com", "123")

console.log(chai)