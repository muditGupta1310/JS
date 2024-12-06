// Array 

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2);

// Array Methods

// myArr2.push(6)
// myArr2.push(7)
// myArr2.push(8)
// myArr2.push(9)
// myArr2.push(10)
// console.log(myArr2)


// myArr2.pop()

// myArr2.unshift(9)

myArr2.shift()

// console.log(myArr2.includes(9))

// console.log(myArr2.indexOf(2))

const newArr = myArr2.join()

console.log(myArr2)

console.log(newArr)

console.log(typeof(newArr))


// slice , splice

console.log(myArr2)

const myn1 = myArr2.slice(1, 3)

// console.log(myn1)


// console.log("B ",myArr2)

const myn2 = myArr2.splice(1, 3)
console.log(myn1)
console.log(myn2)
console.log("B ",myArr2)

