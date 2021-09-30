const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validateHttpStatus = dogData => {
    // .ok check the response status is in the interval 200 ... 299 http code.
    if (!dogData.ok) {
        throw new  Error(`HTTP error, status ${dogData.status}`)
    }

    // json() returns one promise, where you can catch only the response returns
    return dogData.json()
}

// { destructor } is catch only the message attribute on the response
const setDogImage = ({ message }) => dogImg.setAttribute('src', message)

const handleRequestError = error => console.log(error.message)
    
/* fetch() makes a http request and return the response */
fetch(url)
    .then(validateHttpStatus)
    .then(setDogImage)
    .catch(handle)
