const row = 5

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