const wrongDataFormat = [
  'preto-PP',
  'preto-M',
  'preto-G',
  'preto-GG',
  'preto-GG',
  'branco-PP',
  'branco-G',
  'vermelho-M',
  'azul-XG',
  'azul-XG',
  'azul-XG',
  'azul-P'
]

const formatedObj = wrongDataFormat.reduce((acc, item) => {
  const [color, size ] = item.split('-')
  
  acc[color] = acc[color] || {}
  acc[color][size] = acc[color][size] || 0 
  acc[color][size]++

  return acc
}, {})

console.log('Objeto formatado: ', formatedObj)