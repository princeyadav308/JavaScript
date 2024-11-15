class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const captain = new User("captain", "email@gmail.com","234")

console.log(captain.encryptPassword());
console.log(captain.changeUsername());




/////// behind the scene

function Users(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

Users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Users.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}
const Bruce = new Users("Bruce", "email@gmail.com","234")
console.log(Bruce.changeUsername());
console.log(Bruce.encryptPassword());
