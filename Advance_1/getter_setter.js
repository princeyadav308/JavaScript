class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }


    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}
const captain = new User("captain", "23sdf4")
console.log(captain.password);
