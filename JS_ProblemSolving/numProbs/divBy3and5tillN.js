// Print Numbers from 1 to 'n' Which are Divisible by 3 and 5

const n = 300

const DivBy3and5 = (n) => {
    let i = 0
    for (i; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(i)
        }
    }
}

DivBy3and5(n)