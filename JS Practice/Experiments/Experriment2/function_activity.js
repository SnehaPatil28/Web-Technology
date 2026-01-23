function even_odd(num){
    if(num % 2 == 0)
        console.log("number is even")
    else
        console.log("number is odd")
}
even_odd(10)

//sum of array
function sum_of_array(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
let array = [1,2,3,4,5]
console.log(sum_of_array(array))
