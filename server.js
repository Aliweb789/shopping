// NodeJS EXPRESS NESTJS
// Python DGANJO FastApi

const express = require('express')
const app = express()
const port = 3555


// Traditional Get Api
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
// Rest Api
app.get('/rest', (req, res) => {
    res.json({name: "Marco", age: 21, group: "MIT"})
})


app.listen(port, () => {
  console.log(`Backend Server is running on port ${port}`)
})
