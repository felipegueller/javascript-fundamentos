const usersList = document.querySelector('ul[data-js="users-list"]')

const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:4567/')
    return response.json() // transform the data to json format
  } catch (error) {
    console.log('error: ', error)
  }
}

const insertUserInList = async () => {
  const users = await getUsers()

  // transform in one string of LIs elements
  const lis = users.reduce((accumulator, { name }) => {
    return (accumulator += `<li>${name}</li>`)
  }, '')

  // Setting itens in list
  usersList.innerHTML = lis
}

insertUserInList()

window.addEventListener('DOMContentLoaded', getUsers)
