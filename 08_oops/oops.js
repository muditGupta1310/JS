const user = {
    username: "mudit",
    loginCount : 7,
    signedIn : true,

    getUserDetails : function () {
        console.log("Got user Details from database");
        
    }

}

console.log(user.username);

console.log(user.getUserDetails());
