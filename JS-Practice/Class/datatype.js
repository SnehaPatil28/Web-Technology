// whe
let sym = Symbol('12')

console.log(sym)

let id = '123'
console.log(id === sym)

//array
const arr = [1,2,3,4,5,6]
console.log(arr)

//object
const myObject = {
    fname : "Sneha",
    age : 20,
    email : "sneha@123"
}
console.log(myObject.age)

//function - delaration , defination, call
function fun(){
    return 10 + 30;
}
console.log(fun())

//activity
let fun1 = function (){console.log("Function calling using variable")}
console.log(fun1)
fun1()