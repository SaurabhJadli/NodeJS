// WAP To Print Alternating Binary Triangle like below:
// 1
// 01
// 101
// 0101
// 10101

const row = 5

const binaryTri = (row) => {
for (let i = 1; i <= row; i++) {
    let pattrn = ''

    for (let j = 1; j <= i; j++){
        if (i % 2 == 1) {
            pattrn = pattrn + j % 2
        }
        else {
            pattrn = pattrn + (j + 1) % 2
        }
    }
    console.log(pattrn)
}
}

binaryTri(row)