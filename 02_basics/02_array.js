const marvel = ["thor", "ironman","spiderman"]
const dc = ["flash", "batman","superman"]

// marvel.push(dc)
// console.log("marvel.push(dc)");
// console.log(marvel);


// const all_hero = marvel.concat(dc)
// console.log("marvel.concat(dc)")
// console.log(all_hero);


const all_hero = [...marvel, ...dc]
// console.log(all_hero)


const a1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const a2 = a1.flat()

// console.log(a2)

// console.log(Array.from("mudit"));

// console.log(Array.from({name:"mudit"}));  //interesting case

let scr1 = 100
let scr2 = 200
let scr3 = 300


console.log(Array.of(scr1,scr2,scr3));