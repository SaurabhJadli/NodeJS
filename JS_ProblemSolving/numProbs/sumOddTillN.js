const n = 10

const SumOdd = (n) => {
    let i = 0
    let sumOd = 0
    for (i; i <= n; i++) {
        if (i % 2 != 0) {
            console.log(i)
            sumOd = sumOd + i
        }
    }
    console.log("total of odd number till " + n + " is " + sumOd)
}

SumOdd(n)