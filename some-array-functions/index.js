const bottles = ['Coca-cola', 'Sprite']

// #01 - Push() -> This method insert an element in array
bottles.push('Fanta laranja', 'Tubaína', 'Mineirinho', 'Dolly')
// console.log('bottles now: ', bottles)

// #02 - Filter() -> This methods returns a new array with filterd data
const filteredBottles = bottles.filter(bottle => {
  return bottle !== 'Sprite'
})
// console.log('The filtered bottles were: ', filteredBottles)

// #03 - Find() -> returns the first element that calls the logic
const bottleSprite = bottles.find(bottle => {
  return bottle === 'Sprite'
})
// console.log('The bottle founded was: ', bottleSprite)

// #04 - includes(element, index[optional]) -> returns true or false about an element
const includesFanta = bottles.includes('Fanta laranja', 2);
// console.log('Includes fanta?? ', includesFanta)

// #05 ...(spreed) -> returns an array
const newArrayBottles = [...bottles, 'Skin', 'Guarana Jesus']
// console.log('Spreed operator: ', newArrayBottles)

// #06 - Slice(startIndex, endIndex[optional]) - returns an new array without the index position
const sliceExample = bottles.slice(1, -2)
// console.log('Slice example: ', sliceExample)
// console.log('bottles original: ', bottles)
// console.log('Slice result: ', bottles.slice(1)) // returns the elements after the 1 position
// console.log('Slice result: ', bottles.slice(-2)) // returns the two last elements
// console.log('Slice result: ', bottles.slice(0, 3))

// #07 - pop() -> remove the last element of array
// console.log('Array before pop(): ', bottles)
// console.log('Element removed: ', bottles.pop())
// console.log('Array after pop(): ', bottles)

// #08 - Map() -> Returns an new array manipalated/transformed
const bottlesMap = bottles.map(bottle => {
  return `${bottle} - ${bottle.length}`
})
// console.log('bottle mapped', bottlesMap)

// #09 - reverse() -> reverse all position of array (watchout)
const bottlesReverse = [...bottles].reverse() // prevent the bottles original
// console.log('Bottles reverse: ', bottlesReverse)

// #10 - forEach() -> loops and interation
bottles.forEach(bottle => {
  // console.log(bottle)  
})

/* Dividindo um grande array em um novo array */
// Array com 500 posições
// 30 posições ficam legal para ocupar um array novo
// 500 / 30 = 16.6 ~ 17
const randomNumber = () => Math.floor(Math.random() * 101)
const array = []
for (let i = 0; i < 603; i++) 
  array.push(randomNumber())

let qtdPositions = 30
const newArray = []
for (let i = 0; i < array.length; i += qtdPositions) {
  newArray.push(array.slice(i, i + qtdPositions))
}
console.log(newArray)

