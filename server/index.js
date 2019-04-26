require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env 
// const houseCtrl = require('./controller')


//TOP LEVEL MIDDLEWARE
app.use(express.json())


//ENDPOINTS 

app.get('/api/houses', (req, res )=> {
  const db = req.app.get('db')
  db.getHouse().then(result => {
    res.status(200).send(result[0])
  })
})



//Connect to DATABASE
massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('db is connected')
})


// START THE SERVER 
app.listen(SERVER_PORT, () => { 
  console.log('Listening on port',SERVER_PORT)
})


