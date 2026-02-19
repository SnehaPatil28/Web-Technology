//Using Let
let name = "Sneha";
console.log(name)
//let scope
{
let name = "Sneha Patil";
console.log(name)
}
console.log(name)


//Using var
var name1 = "Sneha";
console.log(name1)
//var scope
{
var name1 = "Sneha Patil";
var name1 = "Patil"; 
}
console.log(name1)

//const 
const num = 10;
num = 20 ;   // gives error (Const value can't change)
console.log(num)

//types of datatypes
/*there are 2 types of datatypes 
    1. Primitive - number, bool, string, null, undifined
    2. Non-Primitive - object, array */

let temp = null
let a = 10
let b = "sneha"
let c 
let cd = true

console.log(typeof(temp))
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(cd))

//Difference between null and undefined
//  null represents an intentional absence of value
//  undefined means a variable has been declared but no value has been assigned
