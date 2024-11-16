class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USername : ${this.username}`);
        
    }
    static createId(){
        return`234`

    }
}

const captain = new User("captain")
// console.log(captain.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }


}

const iphone = new Teacher("Iphone", "ipohone@apple.com")

iphone.logMe()