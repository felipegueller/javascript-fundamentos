const obj = {
  propA: {
    propB: 'Deu certo'
  },
  chave1: {
    chave2: {
      chave3: 'E agora?'
    }
  }
}
const getDinamicAccess = (obj, keys) => {
  let dinamicValue = obj

  keys.forEach(key => dinamicValue =  dinamicValue[key])

  return dinamicValue
}

// 1º teste
const keys = ['propA', 'propB']
const result = getDinamicAccess(obj, keys)

console.log('Teste 01:')
console.log(`O valor obtido foi: ${result}`)
console.log('Objeto: ', obj)


// 1º teste
const keys2 = ['chave1', 'chave2', 'chave3']
const result2 = getDinamicAccess(obj, keys2)

console.log('Teste 02:')
console.log(`O valor obtido foi: ${result2}`)
console.log('Objeto: ', obj)
