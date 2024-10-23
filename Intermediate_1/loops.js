// Iterations or Iterators

// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element==5) {
        // console.log("5 is best number");
    }
    // console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
    // console.log(`Table of: ${i}`);
    for (let j = 0; j <= 10; j++) {
    //    console.log(`Inner loop Value ${j} and inner loop ${i}`);

    // console.log(i + '*' + j + '= ' + i*j);
    
    }    
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);
    
// }


// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         continue
//     }
//     console.log(`Value of i is ${index}`);
    
// }


////////////////////////////////////// 


//  while and do while looops


let index = 0

while (index <= 10) {
    // console.log(`Value of index is ${index}`);
    index = index + 2
}

let capArray = ["Flash ", "Batman ", "Superman "]

let arr = 0

while (arr < capArray.length) {
    // console.log(`Valuse is ${capArray[arr]}`);
    arr++
}



//////////// Do while loop


let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);