const r = 5

// const invertRightTriangle = (r) => {
//     let i = 0
//     let j = 1
//     for (i; i < r; i++) {
//         let rowSize = r - i
//         let row = ''
//         for (j; j <= rowSize; rowSize--) {
//             row = row + '*'
//         }
//         console.log(row)
//     }
// }

// invertRightTriangle(r)

const revTri = (r) => {
    let i = 1
    for (i; i <= r; i++) {
        let j = 0
        let star = ''
        let rowSize = r - i
        for (rowSize; j <= rowSize; rowSize--) {
            star = star + '*'
        }
        console.log(star)
    }
}

revTri(r)