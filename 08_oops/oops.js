const user = {
    username: "mudit",
    loginCount : 7,
    signedIn : true,

    getUserDetails : function () {
        // console.log("Got user Details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
    }

}

const user2 = {
    username: "mudit",
    loginCount : 7,
    signedIn : true,

    getUserDetails : function () {
        // console.log("Got user Details from database");
        // console.log(`Username : ${this.username}`);
        console.log(this);  
    }
}




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this . isLoggedIn = isLoggedIn

    // return this
}


const userOne = new User("mudit", 4, true)

const UserTwo =  new User("MuditGupta", 5, false)

console.log(userOne);

console.log(UserTwo);


// new creates an empty object
// 2nd, Constructor Function is called by new Keywords
// 3rd, values injected 
// 4th return the values


