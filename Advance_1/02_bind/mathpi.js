const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


const captain = {
    name: "captain",
    price: "234",
    isAvailable: true,

    orderFood: function(){
        console.log("code nahi chala");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(captain, "name"));

Object.defineProperty(captain, 'name', {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(captain, "name"));

for (const [key, value] of Object.entries(captain)) {
    if (typeof value != 'function') {
        
        console.log(`${key}, ${value}`);
    } 
    
}