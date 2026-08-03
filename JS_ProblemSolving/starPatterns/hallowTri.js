const row = 5

for (let i = 1; i <= row; i++) {
    let pattrn = ''

    for (let j = 1; j <= row - i; j++) {
        pattrn = pattrn + ' '
    }

    for (let k = 1; k <= i * 2 - 1; k++) {
        if (i == 1 || i == row || k == 1 || k == i * 2 - 1){
            pattrn = pattrn + '*'
        }

        else {
            pattrn = pattrn + ' '
        }
    }
    console.log(pattrn)
}