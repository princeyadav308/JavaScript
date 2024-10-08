let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let anotherDate = new Date(2024, 9, 9)
console.log(anotherDate.toDateString());


const myTime = Date.now()
console.log(myTime);

myDate.toLocaleDateString('default', {
    weekday: "long",
})