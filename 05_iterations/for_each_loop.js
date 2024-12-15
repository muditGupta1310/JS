const coding = ["js","ruby","java","python"]

// coding.forEach( function (item) {
//     console.log(item);
// }   )


// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
    
// }


// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr); 
// })


const myCoding = [
    {
        langName : "JS",
        langFile : "js"
    },
    {
        langName : "Python",
        langFile : "py"
    },
    {
        langName : "C++",
        langFile : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
} )