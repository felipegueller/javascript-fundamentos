const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', async (req, res) => {
  try {
    // extracting the data into the response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')

    // send the json data to frontend
    return res.json(data)
  } catch (error) {
    console.log(error)
  }
})

app.listen('4567')
