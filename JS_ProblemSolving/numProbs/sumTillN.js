let n = 5

let SumN = (a) => {
    let i = 1
    temp = 0
    for (i; i <= a; i++) {
        temp += i
    }
    console.log("sum of " + a + " is " + temp)
}
console.time()
SumN(n)
console.timeEnd()

// Time Complexity O(1)
console.time();

const num = 1000000000;
let sum = (num * (num + 1)) / 2;

console.log(sum);
console.timeEnd();