const n = 10

let i = 1
let evenSum = 0

for (i; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i)
        evenSum = evenSum + i
    }
}

console.log("sum of even number in " + n + " is " + evenSum)