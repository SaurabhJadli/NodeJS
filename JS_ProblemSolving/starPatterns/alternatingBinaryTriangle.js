const row = 5

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