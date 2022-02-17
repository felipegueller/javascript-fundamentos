const serverData = ['Felipe', 'Ana', 'Lucas', 'Gambeta', 'Tônia', 'Zeca']

const nameList = ['carlos', 'Felipe', 'Lucia', 'Ana', 'Sara', 'Junio', 'Fred']

// adding new data
serverData.forEach(dataServer => {
  let boolean = false
  nameList.forEach(itemAtual => {
    if (itemAtual === dataServer) boolean = true
  })
  if (!boolean) nameList.push(dataServer)
})

// remove a data
const remove = nameList.filter(name => {
  console.log(name)
  let boolean = false
  serverData.forEach((serverData, indexServ) => {
    console.log(
      `vez[${indexServ} - atualizar = ${name} - servidor = ${serverData} - Existe nos dois? ${
        serverData === name
      }]`
    )
    if (serverData === name) boolean = true
  })
  console.log('')
  if (boolean === false) return name
})

remove.forEach(item => {
  const index = nameList.indexOf(item)
  nameList.splice(index, 1)
})

console.log('Server data: ', serverData)
console.log('List name updated: ', nameList)
