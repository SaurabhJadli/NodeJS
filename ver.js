function ver () {
    var publicPaking = "public parking inside Block"
    let privatePaking = "private parking inside Block"
    
    console.log(publicPaking)
    console.log(privatePaking)
}

ver()

console.log("outside Block:")

x = 10

var x
console.log(x)


// y = 10

// let y
// console.log(y)

{
var num = 10
let num2 = 12
}

console.log("var num outside block: " + num)
// console.log("let num2 outside block: " + num2)

function ver2() {
    console.log("inside ver2: " + x)
}

ver2()

const unchange = 3.14

console.log(unchange)

unchange = 99

console.log(unchange)   // Error assignment to conatant veriable