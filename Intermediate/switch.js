const month = 5

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Value didn't match");
        break;
}

// Truty and falsy

// falsy value
//  false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy value
// true, "0", 'false', " ", [], {}, function(){}



const userEmail = []

if (userEmail) {
    console.log("Got user email");
    
}else {
    console.log("don't have user email");
    
}

if (userEmail.length === 0 ) {
    console.log("Array is empty");
    
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}
