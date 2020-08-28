const express = require('express')

const data = [
  {
    name: 'david',
    website: 'cnn.com',
    hours: 12
  },
  {
    name: 'rein',
    website: 'nos.nl',
    hours: 9
  },
  {
    name: 'lisa',
    website: 'codaisseur.com',
    hours: 5
  }
]

const app = express()

const port = 4000

function onListen () {
  console.log(`Listening on :${port}!`)
}

app.listen(port, onListen)

app.get(
  '/',
  (request, response) => {
    response.send(data)
  }  
)

function getUser (request, response) {
  const { username } = request.params
  // const username = request.params.username

  // const match = user => user.name === username
  // const user = data.find(match)
  const user = data
    .find(user => user.name === username)

  if (user) {
    response.send(user)
  } else {
    response.send('user not found')
  }
}

app.get('/user/:username', getUser)