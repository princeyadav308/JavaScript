// Stack memory ( premitive datatype) and heap memory ( non premitive)
// copy change hota hai stack mein and reference/original change hota hai heap mein


let myChannelName = "Scaleup_Official"

let anotherName = myChannelName

anotherName = "Scaleup"

console.log(myChannelName);
console.log(anotherName);

//another example

let user1 = {
    email: "scaleupofficial@gmail.com",
    upi: "user@icicibank"
}

let user2 = user1

user2.email = "scaleup@gmail.com"

console.log(user1.email)
console.log(user2.email)
