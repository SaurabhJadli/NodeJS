let n = 10

let CheckEven = (n) => {
    let i = 1
    for (i; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

CheckEven(n)