const myNums = [1,2,3,4,5,6,7,8,9,10]


// By using filter function
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// you have to write return if using {} else you can directly use () like on this example
// const newNums = myNums.filter( (num) => num > 4 )

// by using foreach function
const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )


// console.log(newNums);



///////////////////

const books = [
    {
        title: 'Book one',
        genre: 'Fiction',
        publish: 1981,
        edition: 2002
    },
    {
        title: 'Book two',
        genre: 'Non-Fiction',
        publish: 2014,
        edition: 2023
    },
    {
        title: 'Book three',
        genre: 'Science',
        publish: 1871,
        edition: 1999
    },
    {
        title: 'Book four',
        genre: 'History',
        publish: 1984,
        edition: 2000
    },
    {
        title: 'Book five',
        genre: 'Fiction',
        publish: 1721,
        edition: 1892
    },
    {
        title: 'Book six',
        genre: 'Non-Fiction',
        publish: 1970,
        edition: 2015
    },
    {
        title: 'Book seven',
        genre: 'History',
        publish: 1700,
        edition: 2000
    },
    {
        title: 'Book eight',
        genre: 'Science',
        publish: 1945,
        edition: 2010
    }
];

let userBooks = books.filter( (bk) => bk.genre === 'History' )
userBooks = books.filter( (bk) => bk.publish >= 1940 && bk.genre === "Science")

console.log(userBooks);




////////////////////////////

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newnumbers = myNumbers.map( (num) => num + 10 )


// this is called channing
const newnumbers = myNumbers.map((num) => num *10)
                            .map((num) => num +1)
                            .filter( (num) => num >= 30  )

console.log(newnumbers);


