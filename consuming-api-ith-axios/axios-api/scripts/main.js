const url = 'http://localhost:4567/api'
const content = document.querySelector('#render-results')

const newUser = {
  name: 'Perna Longa',
  avatar: 'http://lorempixel.com.br/400/200',
  city: 'Las Vegas'
}

const updateUser = {
  name: 'Lucky Skywalker',
  avatar: 'http://lorempixel.com.br/400/200',
  city: 'Another Galaxy'
}

const getUsers = async () => {
  try {
    const { data } = await axios.get(url)
    content.textContent = JSON.stringify(data)
  } catch (error) {
    console.log(error)
  }
}

const addNewUser = async () => {
  try {
    const { data } = await axios.post(url, newUser)
    if (!data === 'User saved!') return
    getUsers()
    alert(data)
  } catch (error) {
    console.log(error)
  }
}

const updateAnUser = async () => {
  try {
    const { data } = await axios.put(`${url}/2`, updateUser)
    if (!data === 'User updated!') return
    getUsers()
    alert(data)
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async () => {
  const { data } = await axios.delete(`${url}/2`)
  if (!data === 'User deleted!') return
  getUsers()
  alert(data)
}

window.addEventListener('DOMContentLoaded', getUsers)
