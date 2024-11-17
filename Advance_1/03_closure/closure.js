// function init(){
//     let name =  "Mozilla"; //name is a local variable created by init

//     function displayName(){
//         //displayName() is the inner function , that forms the closure
//         console.log(name) // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

// function outer(){
//     let username = "captain"
//     function inner(){
//         let secret = "my234"
//         console.log("inner" , username);
        
//     }
//     function innerTwo(){
//         console.log("inner Two ", username);
//         console.log(secret);
        
//     }
//     inner()
//     innerTwo()


// }
// outer()
// console.log("Too outer", username);


function makeFunc(){
    const name = "Captain";
    function displayName(){
        console.log(name);
        
    }
    return displayName
}
const myFunc = makeFunc();
myFunc();