

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNUmbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1 + number2
    
}
const result = addTwoNUmbers(3,4)
// console.log("Result: ", result);

// addTwoNUmbers(3,"4")
// addTwoNUmbers(3,"a")
// addTwoNUmbers(3,null)

function loginUserMessage(username = ""){
    if(!username){
        console.log("Please enter a username.");    
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 31))

const user = {
    username: "hitesh",
    price: 166
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,300,400,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,300,400,600]));
