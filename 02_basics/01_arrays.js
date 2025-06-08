//Array

const myArr = [0,1,2,3,4,5,6,7,8,9]
const myHeros = ["shaktiman", "ironman", "antman"]
// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[2]);


//Array methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.pop(7)

// myArr2.unshift(9)
// myArr2.shift()

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(3));
// console.log(myArr2);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ", myArr);


