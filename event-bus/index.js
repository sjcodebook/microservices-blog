const express = require('express')
const { randomBytes } = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(cors())

// const posts = {}

// app.get('/posts', (req, res) => {
//   res.send(posts)
// })

app.post('/events', (req, res) => {
  const id = randomBytes(4).toString('hex')
  const event = req.body

  console.log(event)

  axios.post('http://localhost:4000/events', event)
  axios.post('http://localhost:4001/events', event)
  // axios.post('http://localhost:4002', event)

  res.status(200).send(id)
})

app.listen(4005, () => {
  console.log('listening on 4005')
})