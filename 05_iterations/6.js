// const coding = ["js","ruby","java","python"]


// const values = coding.forEach( (item) => {
//     // console.log(item);   
//     return item
// })
// console.log(values);     //for each values return nhi krta agar values chahiye then use push command for new array


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

const newNums = []

myNums.forEach((num) => {
    if(num > 4) {
        newNums.push(num)
    }
})

console.log(newNums);


