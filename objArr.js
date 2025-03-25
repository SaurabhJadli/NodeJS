let obj1 = {
    name: "John",
    age: 25,
    isMarried: false
}

let obj2 = {
    name: "Saurabh",
}

let obj3 = {
    name: "name3"
}

let arr = [obj1, obj2, obj3]

let arr2 = [
    {
        name: "Saurabh"
    },
    {
        name: "name3"
    },
    {
        name: "name4"
    },
]

console.log(arr)
console.log("object inside array: " + arr2)
console.log(arr2[1].name)

console.log(typeof obj1)
