// reducing grades (numbers)
const grades = [1, 1.5, 0.6, 4.7];
const average = grades.reduce((accumulator, item) => accumulator + item, 0)
console.log(`The sum of grades results on average: ${average.toFixed(1)}!`)

// reducing games (strings and numbers)
const games = [
  { name: 'Dark Souls', price: 200.99 }, 
  { name: 'NFS Underground 2', price: 40.00 },
  { name: 'Age of Mithology', price: 29.90 },
  { name: 'Red Dead Redemption 2', price: 299.99 }
]
const gamesListNames = games.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '')
const sumOfPriceGames = games.reduce((accumulator, { price }) => accumulator + price, 0 )
console.log(gamesListNames)
console.log(`Sum price of games: R$ ${sumOfPriceGames.toFixed(2)}`)

// reducing age (objects)
const people = [
  { name: 'Maria', age: 18},
  { name: 'Glória', age: 19},
  { name: 'Anita', age: 18},
  { name: 'Jamile', age: 20},
  { name: 'Gustavo', age: 19},
  { name: 'Antônio', age: 19},
]
const agesFrequency = people.reduce((acc, { age }) => {
  acc[age] = acc[age] + 1 || 1
  return acc
}, {})
console.log('Ages frequency: ', agesFrequency)

