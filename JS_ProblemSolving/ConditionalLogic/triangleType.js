const a = 1
const b = 4
const c = 5

const checkTri = (a, b, c) => {
    if (a ** 2 + b ** 2 == c ** 2)
        console.log('right triangle')

    else if (a == b && b == c)
        console.log('equal triangle')

    else if (a == b || a == c || b == c)
        console.log('isosceles triangle')

    else
        console.log('scalene triangle')
}

checkTri(a, b, c)