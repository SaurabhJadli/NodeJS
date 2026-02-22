// factorial means multiplication till that number starting from 1
// factorial of 3! is 1*2*3 = 6

let n = 5

const FactoN = (n) => {
    let i = 1
    let factorial = 1
    for (i; i <= n; i++) {
        factorial = factorial * i
    }
    console.log("Factorial of " + n + " is " + factorial)
}

FactoN(n)