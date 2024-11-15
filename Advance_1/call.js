function setUsername(username){

    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    
    setUsername.call(this, username)

    
    this.email = email
    this.password = password
    
}

const captain = new createUser("captain", "captain@gmail.com", 34)
console.log(captain);
