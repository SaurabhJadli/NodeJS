const income = 750000

const incomeTax = (income) => {
    if (income >= 0 && income <= 250000)
        console.log('No income tax')

    else if (income >= 250001 && income <= 500000)
        console.log(5 / 100 * (income - 250000))

    else if (income >= 500001 && income <= 1000000) {
        let five = 5 / 100 * 250000
        let twenty = 20 / 100 * (income - 500000)
        console.log(five + twenty)
    }

    else if (income >= 1000001) {
        let five = 5 / 100 * 250000
        let twenty = 20 / 100 * 500000
        let thirty = 30 / 100 * (income - 1000000)

        console.log(five + twenty + thirty)
    }
}

incomeTax(income)