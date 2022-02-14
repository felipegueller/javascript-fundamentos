const numbers = [1, 2, 3]

const doubledNumbers = numbers.map(number => number * 2)
console.log('numbers: ', numbers)
console.log('doubledNumbers: ', doubledNumbers)

const numbersGreaterThan3 = doubledNumbers.filter(number => number > 3)
console.log('numbersGreaterThan3: ', numbersGreaterThan3)

const numberGreaterThan4 = doubledNumbers.some(item => item > 4)
console.log('numberGreatherThan4: ', numberGreaterThan4)
