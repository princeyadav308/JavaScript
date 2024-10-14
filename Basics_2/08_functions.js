function sayMyName(){
    console.log("C");
    console.log("A");
    console.log("P");
    console.log("T");
    console.log("A");
    console.log("I");
    console.log("N");
}

// sayMyName()
// sayMyName is refrence and () is execution
// (number1,number2) is known as parameter

function addTwonumber (number1,number2){
    console.log(number1+ number2);
}


// addTwonumber(2,3)
//(2,3) is known as arguments

// const result = addTwonumber(2,3)
// console.log("Result" , result);

// another method



function addTwonumber (number1,number2){
    // let result = number1 + number2
    // return result

    //another method

    return number1 + number2
}

const result = addTwonumber(2,3)

// console.log("Result is" , result);



// function isLoggedIn(username = "captain"){
//     // if(username === undefined){
//     //     console.log("Please enter username");
//     //     return
//     // }
//     if(undefined){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(isLoggedIn("Captain"))
// console.log(isLoggedIn("captain"))




function calculateCartPrice(val1,val2,...num1) { // ... is res operator 
    return num1
}

calculateCartPrice(2)

// console.log(calculateCartPrice(20,23,435,23));


const user = {
    username: "Captain",
    price: 234
}

function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} price is ${anyObject.price}`);
    
}

// handleObject(user)


//another method

handleObject({
    username : "Captain",
    price: 345
})

// handleObject(user)


// another method

const myNewArr = [234,3245,456,234]

function returnSecondValue(getArray) {
    return getArray[2]
}

// console.log(returnSecondValue(myNewArr));


