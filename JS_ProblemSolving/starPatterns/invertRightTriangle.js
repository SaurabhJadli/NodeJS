// WAP To make invert Right Triangle like below:
// *****
// ****
// ***
// **
// *

const r = 5

// invertRightTriangle(r)

// const revTri = (r) => {
//     let i = 1
//     for (i; i <= r; i++) {
//         let j = 0
//         let star = ''
//         let rowSize = r - i
//         for (rowSize; j <= rowSize; rowSize--) {
//             star = star + '*'
//         }
//         console.log(star)
//     }
// }

// revTri(r)

const anotherInvert = (n) => {
    for (let i = 1; i <= n; i++){
        let star = ''
        for (let j = i; j <= n; j++) {
            star = star + '*'
        }
        console.log(star)
    }
}

anotherInvert(r)