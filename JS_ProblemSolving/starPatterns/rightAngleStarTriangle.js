const r = 5

const rightTriangle = (r) => {
    let i = 1
    for (i; i <= r; i++) {
        let j = 1
        let row = ''
        for (j; j <= i; j++) {
            row = row + '*'
        }
        console.log(row)
    }
}

rightTriangle(r)