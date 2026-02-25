const a = 10
const b = 10
const c = 10

const checkTri = (a, b, c) => {
    if (a ** 2 + b ** 2 == c ** 2)
        console.log('right triangle')

    else if (a == b == c)
        console.log('equal triangle')
}

checkTri(a, b, c)