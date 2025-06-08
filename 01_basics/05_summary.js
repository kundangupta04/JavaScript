// # Primitive (Copy)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.03

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456123789123646548796n


// # Non Primitive (Reference) , (Original)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

 const myFunction = function(){
    console.log("Hitesh");
    
 }

 console.log(typeof anotherId);
 
 // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Memory ++++++++++++++++++++++++++++++++++


 // Stack (Primitive), Heap (Non-Primitive)

 let myYoutubename = "hiteshchaiaurcode"
 let anothername = myYoutubename
 anothername = "chaiaurcode"
 console.log(myYoutubename);
 console.log(anothername);
 
let userOne = {
    email: "user@google.com", 
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
