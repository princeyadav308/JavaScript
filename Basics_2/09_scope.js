let a = 300

// {} is scope, everything inside is block scope and every thing outside {} is global scope
if (true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
    
}



// console.log(a);
// console.log(b);






// nested scope

function one(){
    const username = "Captain"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()


if (true){
    const username = "captain"
    if (username === "captain"){
        const website = " Youtube.com"
        // console.log(username+ website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// _______________ interesting cases ____________

// ... case one

console.log(addone(5));

function addone(num){
    return num + 1
}

//... case two

// console.log(addtwo(5));

const addtwo = function(num){
    return num + 2
}

