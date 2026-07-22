// Find Maximum of these 3 veribles or number

let x = 1
let y = 5
let z = 7

if (x >= y && x >= z)
    console.log(x)

else if (y >= x && y >= z)
    console.log(y)

else
    console.log(z)
// ----------------------------------------------------------------------------------------------

const maxi = (a, b, c) => {
    if(a >= b && a >= c)
        console.log(a)

    else if(b >= a && b >= c)
        console.log(b)

    else
        console.log(c)
}

maxi(x, y, z)