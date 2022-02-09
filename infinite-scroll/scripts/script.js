const postsContainer = document.querySelector('#posts-container')
const loader = document.querySelector('.loader')
const filterInput = document.querySelector('#filter')

let page = 1

const getPosts = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
  )
  return response.json()
}

const generatePostTemplate = posts =>
  posts
    .map(({ id, title, body }) => {
      return `
        <div class="post">
          <div class="number">${id}</div>
          <div calss="post-info">
            <h2 class="post-title">${title}</h2>
            <p class="post-body">${body}</p>
          </div>
        </div>
        `
    })
    .join('')

const addPostsIntoDOM = async () => {
  const posts = await getPosts()
  const postsTemplate = generatePostTemplate(posts)

  postsContainer.innerHTML += postsTemplate
}

const getNextPosts = () => {
  setTimeout(() => {
    page++
    addPostsIntoDOM()
  }, 300) // 300 ms because of animation dalay
}

const removeLoader = () => {
  setTimeout(() => {
    loader.classList.remove('show')
    getNextPosts()
  }, 1000)
}

const showLoader = () => {
  loader.classList.add('show')
  removeLoader()
}

const hadleScrollToPageBottom = () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement
  const isPageBottomAlmostReached =
    clientHeight + scrollTop >= scrollHeight - 10

  if (isPageBottomAlmostReached) {
    showLoader()
  }
}

const showPostIfMatchInputValue = inputValue => post => {
  const postTitle = post
    .querySelector('.post-title')
    .textContent.toLocaleLowerCase()
  const postBody = post
    .querySelector('.post-body')
    .textContent.toLocaleLowerCase()
  const postContainsInputValue =
    postTitle.includes(inputValue) || postBody.includes(inputValue)

  if (postContainsInputValue) {
    post.style.display = 'flex'
    return
  }
  post.style.display = 'none'
}

const hadleInputValue = event => {
  const inputValue = event.target.value.toLocaleLowerCase()
  const posts = document.querySelectorAll('.post')

  posts.forEach(showPostIfMatchInputValue(inputValue))
}

window.addEventListener('DOMContentLoaded', addPostsIntoDOM)
window.addEventListener('scroll', hadleScrollToPageBottom)
filterInput.addEventListener('input', hadleInputValue)
