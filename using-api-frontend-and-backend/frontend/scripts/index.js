const accessAPI = async () => {
  try {
    const response = await fetch('http://localhost:4567/')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('error: ', error)
  }
}

window.addEventListener('DOMContentLoaded', accessAPI)
