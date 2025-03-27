class User {
    constructor(email, password){
        this.email= email;
        this.password = password
    }
    
    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}


const mudit = new User("mudit@ai", "abc")

console.log(mudit.email);

console.log(mudit.password);
