const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Get user details from database")
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.signedIn)
// console.log(user.getUserDetails())
// console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this 
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);