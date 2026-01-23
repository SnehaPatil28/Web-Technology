let arr = [12,35,85,11,9,10,10,12]

//largest number
let num1 = arr[0]
for(let i = 0; i < arr.length; i++){
    if(num1 < arr[i])
        num1 = arr[i]
}
console.log(num1)

//duplicate in array
let arr2 = []
arr.forEach(element =>{
    if(!arr2.includes(element)){
        arr2.push(element);
    }
})
console.log(arr2)

//find missing number
let Array = [1,2,3,4,5,7,8,9]
let sum = 0
let toatal_sum = 0
for(let i = 1; i<=9; i++){
    toatal_sum += i
}
for(let i = 0; i < Array.length; i++){
    sum += Array[i]
}
console.log(toatal_sum - sum)


