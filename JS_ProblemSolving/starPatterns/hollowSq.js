// WAP To Print Hallow Square like below:
// *****
// *   *
// *   *
// *   *
// *****

const row = 5

const hallowSq = (row) => {
for (let i = 1; i <= row; i++) {
    let patton = ''

        for (let j = 1; j <= row; j++) {
            if (i == 1 || i == row || j == 1 || j == row) {
                patton = patton + '*'
            }
            else {
                patton = patton + ' '
            }
    }
    
console.log(patton)
}
}

hallowSq(row)