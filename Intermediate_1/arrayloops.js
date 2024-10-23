// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}


const greetings = "Hello World"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each character is ${greet}`);
    
}

// Maps

const maps = new Map()
maps.set('In' , "India")
maps.set('USA' , "United States of America")
maps.set('Fr' , "France")
maps.set('Fr' , "France")

// maps are known for its unique value it doesn't repeat the values

// console.log(maps);

for (const [key, Value] of maps) {
    // console.log(key, ': ', Value);
    
}

const myObj = {
    game1 : "NFS",
    game2 : "Spiderman"
}

// for (const [key, value] of myObj) {
//     console.log(key, ': ', Value);
    
// }

//for objects

const myObject = {
    js : "Javascript",
    cpp: "c++",
    rb : "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


// for array

const programming = ["js", "rb", "py", "java"]

for (const key in programming) {
    // console.log(programming[key]);
    
}


// for maps

for (const key in maps) {
//    console.log(key);
   
}

// maps are not iteratiable


/////////////////////////////// for each

const coding = ["js", "ruby", "java", "python"]

// case 1

// coding.forEach(  function (item){
//     console.log(item);
    
// })


// case 2

// coding.forEach(  (item) => {
//     console.log(item);
    
// } )


// case 3

// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )


const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
    {
        languageName : "ruby",
        languageFile : "rb"
    }
]


myCoding.forEach(  (item) => {
    console.log(item.languageName);
   
})