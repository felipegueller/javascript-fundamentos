const express = require('express')
const cors = require('cors')

const app = express()

app.listen(4567, console.log('The server is running on 4567 door!'))

app.use(express.json())
app.use(cors())

let users = [
  {
    id: 1,
    name: 'Felipe Gueller',
    avatar: 'https://avatars.githubusercontent.com/u/35064154?v=4',
    city: 'Castelo'
  }
]

app.route('/api/:id').get((req, res) => {
  const userId = req.params.id
  console.log(`Id do usuário: ${userId}`)

  const user = users.find(user => Number(user.id) === Number(userId))

  return !user ? res.json('User not found!') : res.json(user)
})

app.route('/api').post((req, res) => {
  const lastId = users[users.length - 1]['id']

  users.push({
    id: lastId + 1,
    name: req.body.name,
    avatar: req.body.avatar,
    city: req.body.city
  })

  res.json('User saved!')
})
