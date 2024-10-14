const user = {
    username: "captain",
    price: 999,
    

    // "this" takes current context
    welcomeMessage: function () {
        // console.log(`${this.username}, Welcome to website `);
        // console.log(this);
        
    }


}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this);

// function one(){
//     let username = "captain"
//     console.log(this.username);
// }

// one()


// const one = function (){
//     let username = "captain"
//     console.log(this.username);
// }
// one()



const one = () =>{
    let username = "captain"
    console.log(this);
}
// one()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// {} if wrapped in this then you have to write "return" (implesit return )
// () if wrapped in this then you don't have to write "return" (explecete return)
// to return object () is must

// const addtwo = (num1, num2) => num1 + num2


// const addtwo = (num1, num2) => (num1 + num2) 


const addtwo = (num1, num2) => ({
    username: "captain"
})


console.log(addtwo(2,3));
