
const nums = [1, 2, 3, 4, 5]

const map1 = nums.map((x) => x * x)

console.log(map1)

const names = ["alice", "bob", "charlie", "danielle"]

const cap1 = names.map((name) => name[0].toUpperCase())
console.log(cap1)

const cap2 = names.map((name) => name.slice(1))
console.log(cap2)

const cap3 = names.map((name) => name[0].toUpperCase() + name.slice(1))
console.log(cap3)