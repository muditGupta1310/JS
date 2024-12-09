
let a  = 3000

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a)

function one(){
    const username = "mudit"

    function two(){
        const website = "you tube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
one()

// +++++++++++++++++++++++ interesting+++++++++++++++


console.log(addone(5))


function addone(num){
    return num+1
}




const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))
