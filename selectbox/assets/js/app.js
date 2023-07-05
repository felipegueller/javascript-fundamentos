const form = document.querySelector('[data-js="games-form"]')
const selectbox = document.querySelector('.select-box')
const input = document.querySelector('.select-box input')
const selectList = selectbox.querySelector('ul')

const listaDeJogos = [
  {id: 1, name: "Mario Bros"},
  {id: 2, name: "Sonic"},
  {id: 3, name: "Ragnarok"},
  {id: 4, name: "Prinston Tale"}
]

listaDeJogos.sort((item1, item2) => item1.name.localeCompare(item2.name));

const transformarJogosEmLI = () => {
  return listaDeJogos.map(({id, name}) => {
    const li = document.createElement('li')

    li.textContent = name
    li.setAttribute('data-id', id)

    return li
  })
}

const popularSelectDeJogos =  () => {
  const listaDeLIs = transformarJogosEmLI()

  listaDeLIs.forEach(li => selectList.append(li))
}

const selecionarJogo =  event => {
  event.preventDefault();
  const { game } = form
  const id = game.dataset.id

  if (!id) return

  console.log(id)
}

const alternarselectList = event => {
  const isActive = selectbox.classList.contains('active')
  const isFocusEvent = event.type === 'focus'
  const isBlurEvent = event.type === 'blur'

  if ((!isActive && isBlurEvent) || (isActive && isFocusEvent)) return

  selectbox.classList.toggle('active')
}

const marcarLISelecionada = (itemDeLista) => {
  const itemsDeListaSelecionados = Array.from(selectList.querySelectorAll("li.selected"))

  if (itemsDeListaSelecionados.length)
    itemsDeListaSelecionados.forEach(item => item.classList.remove("selected"))

  return itemDeLista.classList.add("selected")
}

const preencherInputDeSelecao = event => {
  event.stopPropagation()
  const game = event.target

  if (game.tagName !== 'LI') return

  marcarLISelecionada(game)

  input.value = game.textContent;
  input.dataset.id = game.dataset.id
}

input.addEventListener('focus', alternarselectList)
input.addEventListener('blur', alternarselectList)
selectList.addEventListener('mousedown', preencherInputDeSelecao)
form.addEventListener('submit', selecionarJogo)
window.addEventListener("DOMContentLoaded", popularSelectDeJogos)