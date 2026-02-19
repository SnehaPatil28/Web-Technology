let super_hero = ["Super Man", "Spider Man", "Iron Man", "Doctor Strange"]

let str = ["Thor", "Ant Man"]

super_hero.push(str)
console.log(super_hero)

console.log(super_hero[4])

console.log(super_hero[2][1])

console.log(super_hero.concat(str))

const arr = [1, 2, 3, [4, 5, 6], [7, [8, 9, [0, 9]]]];
const arr2 = arr.flat(1);

console.log(arr);
console.log(arr2);

console.log(Array.isArray("Sneha")) 

// data scipting using array - ask question to array
console.log(Array.from("Sneha")) // convert to array (Data scipting in industry)
console.log(Array.from({name: "Sneha"})) // give empty aray directly not conver in key-values

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // cpnverts into array



