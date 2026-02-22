const n = 30

const DivBy3and5 = (n) => {
    let i = 0
    for (i; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i)
        }
    }
}

DivBy3and5(n)