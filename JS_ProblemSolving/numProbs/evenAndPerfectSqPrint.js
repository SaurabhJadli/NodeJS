const n = 20

// const EvenPerfectSq = (n) => {

//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 0 && i ** 2 <= n)
//             console.log(i ** 2)
//     }
// }


const EvenPerfectSq = (n) => {
    let i = 1
    let pSq = 0
    for (i; i <= n; i++) {
        pSq = i ** 2
        if (i % 2 == 0 && pSq <= n)
            console.log(pSq)
    }
}

console.time()
EvenPerfectSq(n)
console.timeEnd()

