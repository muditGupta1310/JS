// for loop

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner Value : ${j}`);
          
//     }

// }

// break and continue

// for (let index = 1; index <= 20; index++) {

//     if (index==5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`Value of i is ${index}`)
    
// }


for (let index = 1; index <= 10; index++) {

    if (index==5){
        console.log("Detected 5")
        continue;
    }
    console.log(`Value of i is ${index}`)
    
}
