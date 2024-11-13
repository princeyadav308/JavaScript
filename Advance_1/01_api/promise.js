// promise one

const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000);
})


promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// promise two

new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve()
    }, 2000);
}).then(function(){
    console.log('Async 2 resolved');
    
})

// promise three

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Captain", email: "captain@gmail.com"})
    }, 3000);
})

promiseThree.then(function(user){
    console.log(user);
    
})

// promise four

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"captain",number:"1132423"})
        }else{
            reject('Error: Something went wrong')
        }
    }, 4000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolved or rejected");
    
})


// promise five (async await)

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({username:"CB",number:"5656565"})
        }else{
            reject('Error: JS went wrong')
        }
    }, 5000);
})

async function consumePromise() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromise()


// async function getAllUser(params) {
//     try {
//         const response = await fetch('https://api.github.com/users/princeyadav308')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }    
// }

// getAllUser()

// another way


fetch('https://api.github.com/users/princeyadav308')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error) => console.log(error))