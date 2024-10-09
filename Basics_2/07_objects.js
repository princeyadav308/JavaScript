// singleton

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: 'captin',
    "full name": "Captain Bruce",
    age: 19,
    location: 'jaipur',
    [mySym]: "mykey",  //to add symbol in objects use [] 
    email: "captain@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "saturday"]
}

// console.log(JsUser[mySym]);

JsUser.email="captainbruce@gmail.com"
// console.log(JsUser);


// Object.freeze(JsUser) 

JsUser.greeting = function() {
    console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    console.log(`Hello JS User,${this.email}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
