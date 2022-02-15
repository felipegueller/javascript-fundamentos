const isObjectEmpty = obj => typeof obj === 'object' && obj !== null

const isObjectsEquals = (obj1, obj2) => {
  if (
    typeof obj1 !== typeof obj2 ||
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object'
  )
    return false

  const props1 = Object.getOwnPropertyNames(obj1)
  const props2 = Object.getOwnPropertyNames(obj2)

  if (props1.length !== props2.length) return false

  if (props1.length === 0)
    return isObjectEmpty(obj1) && isObjectEmpty(obj2) ? true : false

  for (var i = 0; i < props1.length; i++) {
    const prop = props1[i]

    if (obj1[prop] !== obj2[prop]) {
      if (isObjectsEquals(obj1[prop], obj2[prop])) continue
      else return false
    }
  }
  return true
}

const obj1 = {
  name: 'Felipe Gueller',
  age: 23
}

const obj2 = {
  name: 'Felipe Gueller',
  age: 24
}

const trueOrFalse = boolean => (boolean ? 'Verdadeiro' : 'Falso')

console.log(
  `The object ${JSON.stringify(obj1)} is equals the object ${JSON.stringify(
    obj2
  )}? ${trueOrFalse(isObjectsEquals(obj1, obj2))}\n`
)

const obj3 = {
  name: 'Ana Carolina',
  age: 22
}

const obj4 = {
  name: 'Ferdinando',
  age: 12
}

console.log(
  `The object ${JSON.stringify(obj3)} is equals the object ${JSON.stringify(
    obj4
  )}? ${trueOrFalse(isObjectsEquals(obj3, obj4))}\n`
)

const obj5 = {}
const obj6 = {}

console.log(
  `The object ${JSON.stringify(obj5)} is equals the object ${JSON.stringify(
    obj6
  )}? ${trueOrFalse(isObjectsEquals(obj5, obj6))}\n`
)

const obj7 = {
  modelo: 'City',
  marca: 'Honda',
  tanque: 46.4,
  cores: ['prata', 'cinza', 'branco'],
  roda: {
    aro: 16,
    estilo: 'perolizada',
    modelo: 'liga leve',
    cor: 'verde'
  }
}

const obj8 = {
  modelo: 'City',
  marca: 'Honda',
  tanque: 46.4,
  cores: ['prata', 'cinza', 'branco'],
  roda: {
    aro: 16,
    estilo: 'perolizada',
    modelo: 'liga leve'
  }
}

console.log(
  `The object ${JSON.stringify(obj7)} is equals the object ${JSON.stringify(
    obj8
  )}? ${trueOrFalse(isObjectsEquals(obj7, obj8))}\n`
)

const obj9 = {
  objetos: [
    {
      cor: 'verde',
      arvore: 'Salgueiro',
      celular: 'motorola',
      computador: 'dell'
    },
    {
      cor: 'cinza',
      arvore: 'Pinheiro',
      celular: 'Iphone',
      computador: 'Macbook'
    }
  ]
}

const obj10 = {
  objetos: [
    {
      cor: 'verde',
      arvore: 'Salgueiro',
      celular: 'motorola',
      computador: 'dell'
    },
    {
      cor: 'Violeta',
      arvore: 'Acácia',
      celular: 'Windows Phone',
      computador: 'Lenovo'
    }
  ]
}

console.log(
  `The object ${JSON.stringify(obj9)} is equals the object ${JSON.stringify(
    obj10
  )}? ${trueOrFalse(isObjectsEquals(obj9, obj10))}\n`
)
