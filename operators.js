"use strict"

let add = 5 + 5
let sub = 5 - 3
let mul = 5 * 5
let div = 5 / 2
let mod = 5 % 2
let inc = 5
inc++
let dec = 5
dec--

console.log(add) 
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(inc)
console.log(dec)
console.log(5 == 5)
console.log(5 != 5)
console.log(5 > 5)
console.log(5 < 5)
console.log(5 >= 5)
console.log(5 <= 5)
console.log(5 === 5)
console.log(5 !== 5)
console.log(5 && 7)
console.log(5 || 5)

console.log(typeof 5)
console.log(typeof '5')

function multiply(a = 5, b = 10) {
    return a * b
}

console.log(multiply())