const input = document.querySelector('input')

const filtersUsers = async name => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users?name_like=${name}`
  ).then(data => data.json())
}

const debounceEvent = (fn, wait = 1000, timer) => {
  return event => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}

const handleKeyUp = event => {
  console.log('event: ', event)
  console.log('handleKeyUp')
  // filtersUsers(event.target.value).then(users =>
  //   console.log(users.map(user => user.name))
  // )
}

input.onkeyup = debounceEvent(handleKeyUp, 500)
