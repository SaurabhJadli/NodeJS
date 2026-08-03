// WAP To Print Inverted Pyramid Triangle like below:
// *********
//  *******
//   *****
//    ***
//     *
    
const row = 5

const InvertPyramidStarTri = (row) => {
    for (let i = row; i >= 1; i--) {
        let pattern12 = ''

        for (let j = 1; j <= row - i; j++) {
            pattern12 = pattern12 + ' '
        }

        for (let k = 1; k <= i * 2 - 1; k++) {
            pattern12 = pattern12 + '*'
        }

        console.log(pattern12)
    }

}

InvertPyramidStarTri(row)