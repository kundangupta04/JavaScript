const promisesOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    }, 2000)
})

promisesOne.then(function(){
    console.log("Promise consumed")
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved") ;
})



const promisesThree = new Promise(function(resolve, rej){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promisesThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "hitesh", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    //const response = await promiseFive
    //console.log(response)

    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()




//async function getAllUsers() {
//    try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users')
//        console.log(response)
//        const data = await response.json()
//        console.log(data)
//    } catch (error) {
//        console.log("E: ", error);
//    }
//}

//getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
