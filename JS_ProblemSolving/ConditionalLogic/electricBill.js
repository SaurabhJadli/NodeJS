let bill = 340

const CalculateBill = (b) => {
    if (b > 0 && b <= 100)
        console.log(b * 5)

    else if (b <= 200)
        console.log((100 * 5) + (b - 100) * 7)

    else if (b <= 300)
        console.log((100 * 5) + (100 * 7) + (b - 200) * 10)

    else if (b > 300)
        console.log((100 * 5) + (100 * 7) + (100 * 10) + (b - 300) * 12)

    else
        console.log("bill not valid or zero")
}

CalculateBill(bill)