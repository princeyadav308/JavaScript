// if 

/* 
conditional operators
<
>
<=
>=
=       assignment operator
==      check if the value is same or not
===     checks type also (strict equal)
!=      
!==     anti pattern (checks negative pattern)

*/

// const temperature = 40

// if (temperature < 50) {
//     console.log("Temperature less than 50 ");
// } else{
//     console.log("temperature more than 50");
// }







// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
    
// }else if (balance < 900) {
//     console.log("less than 750");
    
// }else {
//     console.log("less than 2000");
    
// }






const userLoggedIn = true
const userDebitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && userDebitCard) {
    console.log("Allowed to shop");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}


// Nullish Coalescing Operator (??) : null undefined 


let val1;
val1 = 5 ?? 10

console.log(val1);
