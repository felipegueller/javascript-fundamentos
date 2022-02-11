// parei no minuto 11:00

/* lexical scope is the scope when the function have access to parent's scope, but the parent does not have access to it's scope. */

const lexical = 'Oi lexical'

// the below function returns an object
const safe = secret => ({
  getSecret: () => secret
})

const privateUserData = 'Dado privado'
const obj = safe(privateUserData)
console.log('Retorno: ', obj.getSecret())

const func = secret => () => secret
console.log(func(privateUserData))
console.log(func(privateUserData)())

const addTo = a => b => a + b

const increment1 = addTo(1)
const increment10 = addTo(10)
const increment20 = addTo(20)

console.log(increment1(7))
console.log(increment10(7))
console.log(increment20(7))
