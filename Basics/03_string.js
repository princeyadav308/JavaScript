const name = "Captain"

const repoCount = 2

// console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// another example

const gameName = new String('CB-game')

console.log(gameName[0]);

console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);

const newString = gameName.substring(0,4)

// console.log(newString);

const anotherString = gameName.slice(1, 3)
// console.log(anotherString);

const game = "   my CB-game    "
// console.log(game);
// console.log(game.trim());

const url = "princeyadav.netlify.app"
console.log(url.replace('app', 'com'))
console.log(url);


console.log(gameName.split('-'));
