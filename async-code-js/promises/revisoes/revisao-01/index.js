const url = 'https://dog.ceo/api/breeds/image/random'
const img = document.querySelector('img[data-js="dog-img"]')

const validateHttpResponse = dogData => {
  if (dogData.ok) {
    return dogData.json()
  } else {
    throw new Error(`Http request error, status ${dogData.status}`)
  }
}

const setDogImage = ({ message: url }) => {
  // rename message parameter to url
  img.setAttribute('src', url)
}

const setErrorMessage = error => {
  console.log(error.message)
}

fetch(url).then(validateHttpResponse).then(setDogImage).catch(setErrorMessage)
