// Write A Program To Print All The Even Numbers Till 'n'

let n = 10

let evenTill = (n) => {
    let i = 1
    for (i; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

evenTill(n)