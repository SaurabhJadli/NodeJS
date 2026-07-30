// Print from 'n' to 1 Without Changing for (i; i <=n; i++)

let n = 5

let Counts = (n) => {
    let i = 1
    for (i; i <= n; i++) {
        console.log(n - i + 1)
    }
}

Counts(n)