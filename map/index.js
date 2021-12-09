// transform array numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const squareNumbers = numbers.map(item => item ** 2)
console.log('Square numbers: ', squareNumbers)

// Taking some names
const books = [
  { name: 'Chapeuzinho vermelho', date: '20/12/1798' },
  { name: 'Jack and the beanstalk', date: '04/11/1948' },
  { name: 'Lord of the Rings - The return of the king', date: '05/04/1945' }
]
const onlyNames = books.map(({ name }) => name)
onlyNames.forEach(name => console.log(name))

const onlyDates = books.map(({ date }) => date)
console.log({ onlyDates })
