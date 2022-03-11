const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.json([{ name: 'felipe' }, { name: 'alex' }])
})

app.listen('4567')
