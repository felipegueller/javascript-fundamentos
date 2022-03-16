const url = 'http://localhost:4567/api'
const content = document.querySelector('#render-results')

const newUser = {
  name: 'Perna Longa',
  avatar: 'http://lorempixel.com.br/400/200',
  city: 'Las Vegas'
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
    if (data === 'User saved!') getUsers()
  } catch (error) {
    console.log(error)
  }
}

window.addEventListener('DOMContentLoaded', getUsers)
