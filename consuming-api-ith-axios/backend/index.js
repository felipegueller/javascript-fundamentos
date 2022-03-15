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

app.route('/app').get((req, res) => {
  return users.length > -1
    ? res.json(users)
    : res.json('The user list is empty!')
})

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

app.route('/api/:id').put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))

  if (!user) return res.json('User not found!')

  const updatedUser = {
    ...user,
    name: req.body['name'],
    avatar: req.body['avatar'],
    city: req.body['city']
  }

  // updating the array by user position (alternative option)
  const userIndex = users.indexOf(user)
  users[userIndex] = updatedUser

  return res.json('User updated!')
})

app.route('/api/:id').delete((req, res) => {
  const userId = req.params['id']

  if (!userId) return res.json("User id isn't found!")

  const user = users.filter(({ id }) => Number(id) === Number(userId))

  if (user) res.json('User not found!')

  const userIndex = users.indexOf(user)

  if (userIndex > -1) {
    users.splice(userIndex, 1)
    res.json('User deleted!')
  }
})
