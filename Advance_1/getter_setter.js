class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get emali(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const captain = new User("captain@gmail.com", "23sdf4")
console.log(captain._email);

