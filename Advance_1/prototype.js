let myName = "Captain           "

console.log(myName.trueLength);



////////////////////

let myHeros = ["Tony", "spiderman"]

let heroPower = {
   tony : "Iron man ",
   spiderman: "Spidy sense",

   getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
    
   }
    
}

Object.prototype.captain = function(){
    console.log(`Captain is present in all objects`);
    
}

Array.prototype.bruce = function(){
    console.log(`Captain says hello`);
    
}

// heroPower.captain()

myHeros.captain()
myHeros.bruce()
// heroPower.bruce()


// ///////////// Inheriteance /////////////////

const User = {
    name: "captain",
    email : "email@gmail.com"
}

const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: "Js assignment",
    fullTime: true,

    __proto__: TeachingSupport
    // use to connect two different object


}

Teacher.__proto__ = User

// new apporach (modern Syntax)

Object.setPrototypeOf(TeachingSupport,Teacher)

// this is porototypeal inheritance


////////////////////

let anotherUsername = "Captainbruce      "
String.prototype.trueLength = function(){
    
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);
    
}
anotherUsername.trueLength()

