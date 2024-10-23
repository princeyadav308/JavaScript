const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function (acc, curval) {
    // console.log(`acc: ${acc} and curval: ${curval}`);
    
    return acc + curval
}, 0)
// this 0 is the initial value .reduce function needs initital value


// console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 5999
    },
    {
        itemName: 'DataScience Course',
        price: 4999
    },
    {
        itemName: 'Python Course',
        price: 3999
    },
    {
        itemName: 'Web Dev Course',
        price: 1999
    },
    {
        itemName: 'JAVA Course',
        price: 2999
    },
    {
        itemName: 'Affiliate Marketing Course',
        price: 1999
    },
];

const Total = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(Total);



