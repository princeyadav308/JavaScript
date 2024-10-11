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
    // console.log("Hello JS User");
}
JsUser.greeting2 = function() {
    // console.log(`Hello JS User,${this.email}`);
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());




//////////////////

// const instaUser = new Object()
const instaUser = {}
instaUser.id = "123abc"
instaUser.name = "Captain"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Captain",
            lastname: "Bruce"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}

// console.log(obj3);



const users = [
   {
    userid:"234",
    email : "email@gmali.com"
   },
   {
    userid:"123",
    email : "mailemail@gmali.com"
   },
   {
    userid:"345",
    email : "mail@gmali.com"
   }
]


users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLogged'));



/////////////////////// object api

const course = {
    courseName: "js course",
    price: "345",
    courseInstructor: "captian"
}

const {courseInstructor: inst} = course

console.log(inst);


// api data is in json format

// {
//     "name" : "captian",
//     "courseName":"js in hindi",
//     "price":"234345"
// }


























