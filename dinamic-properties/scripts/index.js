const obj = {
  propA: {
    propB: 'Deu certo'
  }
}
const keys = ['propA', 'propB']
const getDinamicAccess = (obj, keys) => {
  let dinamicValue = obj

  keys.forEach(key => dinamicValue =  dinamicValue[key])

  return dinamicValue
}
const result = getDinamicAccess(obj, keys)


console.log(`O valor obtido foi: ${result}`)