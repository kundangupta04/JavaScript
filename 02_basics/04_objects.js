// const tinderUser = new Object() //singleton object
const tinderUser = {} //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "e",6: "f"}

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "h@gaol.com",
        
    },
    {
        id:1,
        email: "h@gaol.com",

    },
    {
        id:1,
        email: "h@gaol.com",

    },
    {
        id:1,
        email: "h@gaol.com",

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]