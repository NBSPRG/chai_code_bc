const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send("Welcome to Login!")
})

app.get('/setup', (req, res)=>{
    res.send('Welcome to Setup!')
})

app.get('/html', (req, res)=>{
    res.send('<h1>I am Chandan Kumar, and you have reached to the HTML page router</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})