const form = document.querySelector('[data-js="form"]')
const info = document.querySelector('[data-js="info"]')
const users = []

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target

  const [name, password] = form
  const user = {
    name: name.value,
    password: password.value
  }

  users.push(user)

  users.forEach(({ name, password}) => {
    info.textContent = `Nome: ${name} - Senha: ${password}`
  })
})

