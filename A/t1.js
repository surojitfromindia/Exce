
// solution for: t1.js
// 1. 1
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)

// 1. 2
const evenArray = array.filter(num => num % 2 === 0)
console.log(evenArray)

// 1. 3
const evenIndexArray = evenArray.filter((num, index) => index % 2 === 0)


// 1. 4
const oddArray = array.filter(num => num % 2 !== 0)

// 1. 5

const joinedArray = [...evenArray, ...oddArray]