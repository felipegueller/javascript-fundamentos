const filtersOrder = [
  'origin',
  'destiny',
  'departure_time',
  'arrival_time',
  'waypoints'
]
const filtersArr = [
  {
    origin: 'Rio de Janeiro',
    destiny: 'São Paulo',
    departure_time: '21:00',
    arrival_time: '03:00',
    waypoints: ['Campinas', 'Rio das Ostras']
  },
  {
    origin: 'Salvador',
    destiny: 'Campinas',
    departure_time: '21:00',
    arrival_time: '',
    waypoints: []
  },
  {
    origin: 'Rio grande do Sul',
    destiny: 'Espiríto Santo',
    departure_time: '',
    arrival_time: '21:00',
    waypoints: ['Santa Catarina', 'Rio de Janeiro']
  }
]
const removingEmptyKeys = (filters, filtersOrder) => {
  const obj = { ...filters }

  return filtersOrder.reduce((acc, key) => {
    console.log(`Chave: ${key} - Valor: ${obj[key]}`)
    console.log('accumulator: ', acc)
    return obj[key] ? (acc[key] = obj[key]) : acc
  }, {})
}

const validatedFilters = filtersArr.map(item => removingEmptyKeys(item, filtersOrder))

console.log('Filtros válidado: ', validatedFilters)
