//reverse string
let num = "1234"
console.log(num.split("").reverse().join(""))

//vowels count
let str = "Sneha"
let vowels = "aeiou"
let final_string = str.toLowerCase()
let count = 0
for (const ele of final_string) {
    if(vowels.includes(ele))
        count +=1
}
console.log(count)

//fibonacci series
let number = 7, fnum1 = 0, fnum2 = 1
let f_arr = [fnum1,fnum2]
for(let i = 2 ; i <= number; i++){
    
    let fnum3 = fnum1 + fnum2
    f_arr.push(fnum3)
    fnum1 = fnum2
    fnum2 = fnum3 
}
console.log(f_arr)

//Palindrom
let original_num = "1234"
let reverse_num = original_num.split("").reverse().join("")
console.log(original_num)
console.log(reverse_num)

if(original_num === reverse_num)
    console.log("Palindrome")
