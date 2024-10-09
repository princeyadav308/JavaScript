// array

const myArr = [1,2,3,4,5,6]

const myHeros1 = ["Iron man", 'Captain America','Spiderman']
const myHeros2 = ["Super man", 'flash','batman']

const myArr2 = new Array(1, 2, 3)



// console.log(myArr2[0]);

// myArr.push(7)
// myArr.push(8)
// myArr.pop()


// myHeros.unshift(9)

// myHeros.shift()



// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()


// console.log(typeof myArr);
// console.log(typeof newArr);

// console.log("A", myArr);

// const myn1 = myArr.slice(2,3)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(2,3)
// console.log("C", myArr);
// console.log(myn2);


// myHeros1.push(myHeros2)

// console.log(myHeros1[3][1]);

const allHeros = myHeros1.concat(myHeros2)
// console.log(allHeros);

const allHeros2 = [...myHeros1, ...myHeros2]
// console.log(allHeros2);

const anotherArr = [1,234,5, [243,5,2],23,2,1, [45,545,7],4,[34]]

const realArr = anotherArr.flat(Infinity)
// console.log(realArr)



// console.log(Array.isArray("Captain"));       
// console.log(Array.from("Captain"));       
// console.log(Array.from({name: "captain"}));      //interesting case 


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

