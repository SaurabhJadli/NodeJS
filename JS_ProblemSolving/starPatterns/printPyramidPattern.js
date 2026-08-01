// WAP To Print Pyramid Triangle like below:
//     *
//    ***
//   *****
//  *******
// *********

// the formula 2 * i - 1 is commonly used—it produces the sequence 1, 3, 5, 7, 9, creating a centered pyramid

const row = 5
const pyramidTri = (r) => {

    for (let i = 1; i <= row; i++){
        let spaceAndStar = ''

            // Print spaces
        for (let j = 1; j <= row - i; j++){
            spaceAndStar = spaceAndStar + ' '
        }

            // Print stars
        for (let k = 1; k <= (i * 2 - 1); k++){
            spaceAndStar = spaceAndStar + '*'
        }
        console.log(spaceAndStar)
    }
}

pyramidTri(row)