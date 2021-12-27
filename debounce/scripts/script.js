const input = document.querySelector('input')

const filtersUsers = async name => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${name}`
  ).then(data => data.json())
}

const debounceEvent = (fn, wait = 1000, timer) => {
  return function () {
    clearTimeout(timer)

    timer = setTimeout(() => {
      fn.apply(this, arguments) // aplicando os argumentos ao contexto da função
    }, wait)
  }
}

const handleKeyUp = event => {
  filtersUsers(event.target.value).then(users =>
    console.log(users.map(user => user.name))
  )
}

input.onkeyup = debounceEvent(handleKeyUp, 500)
