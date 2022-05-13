const input = document.querySelector('input[data-js="search"]')

const getFilteredUsers = async name =>
  fetch(`https://jsonplaceholder.typicode.com/users?name_like=${name}`).then(
    data => data.json()
  )

function debounce (fn, wait = 1000, timer) {
  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

async function handleKeyup(event) {
  const users = await getFilteredUsers(event.target.value)
  const UsersNamesList = users.reduce((acc, { name }) => {
    return `${acc}- ${name}\n`
  }, '')
  console.log(UsersNamesList)
}

input.addEventListener('keyup', debounce(handleKeyup, 500))
