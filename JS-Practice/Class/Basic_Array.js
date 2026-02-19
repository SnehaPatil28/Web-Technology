let my_arr = [0,1,2,3,"sneha"]
console.log(my_arr)

const my_arr1 = new Array(1,2,3,4,5,6,7)
console.log(my_arr1)

console.log(my_arr1[0])

console.log(my_arr.pop()) // pop out the last element

my_arr.unshift(9)  // it shift all element and add at first position
console.log(my_arr)

my_arr.shift() // remove the first element
console.log(my_arr)

let num = my_arr.includes(9) // check weather the element is present or not
console.log(num)

let pos = my_arr.indexOf(3) // check index of the element
console.log(pos)

console.log(typeof(my_arr)) // array is of object type

const new_arr = my_arr.join() // join the array and convert to the string
console.log(new_arr)

console.log(typeof(new_arr)) // array is of object type







