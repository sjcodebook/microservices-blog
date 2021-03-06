const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(cors())

const events = []

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  console.log(event)

  axios.post('http://localhost:4000/events', event) // Posts Service
  axios.post('http://localhost:4001/events', event) // Comments Service
  axios.post('http://localhost:4002/events', event) // Query Service
  axios.post('http://localhost:4003/events', event) // Moderation Service

  res.status(200).send(event)
})

app.get('/events', (req, res) => {
  res.status(200).send(events)
})

app.listen(4005, () => {
  console.log('listening on 4005')
})
