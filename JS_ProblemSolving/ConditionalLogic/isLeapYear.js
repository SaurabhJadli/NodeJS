// The Leap Year Rules:
// ✅ Divisible by 4 → leap year
// ❌ Divisible by 100 → NOT a leap year
// ✅ Divisible by 400 → leap year (overrides rule 2)

const year = 1900

const isLeapYear = (year) => {
    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
        console.log("leap year")
    }
    else
        console.log("not leap year")
}

isLeapYear(year)