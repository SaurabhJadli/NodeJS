// array in js

function myArray() {
    const array1 = ["apple", "banana", "pineapple", "mango"]
    console.log(array1.length)
    console.log(typeof array1)

    console.log(array1.length > 0 ? "their are fruits" : "no fruits")

    console.log(array1.toString())
}

myArray()

console.log(typeof myArray)

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]

const arr3 = arr1.join(arr2)

console.log(arr3)

console.log("******************")
const friends = ["name1", "name2", "name3", "name4"]

if (friends === 5) {
    friends.push("name6")
    console.log("final li: "+ friends)
}

if (friends.length < 5) {
    console.log("no new friend added: " + friends)
    
} else {
    console.log("god blas u")
    
}

const group1 = [1, 2, 3]
const group2 = [4, 5]

const finalLi = group1.concat(group2)

console.log(finalLi.length >= 5 ?
     "FREE drinks for " + finalLi
     : "no free drink")


group1.pop(1)
group2.pop(1)

const finalLi2 = group1.concat(group2)
console.log(finalLi2)

