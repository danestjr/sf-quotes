const express = require('express')
const app = express()
const PORT = process.env.PORT || 3010
const { connectToDb, getDb } = require('./mongo')
const { config } = require('dotenv')

config()

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Connect to the database
let db
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Express app is now listening on port ${PORT}`)
    })
    db = getDb()
    console.log('Connected to the database')
  }
})

// Routes
app.get('/', (req, res) => {
  const finder = Math.floor(Math.random() * (28 - 1) + 1);
  var hello = "Everything is working correctly!"
  let quotes

  db.collection('sfquotes')
    .find({ id: finder }) //returns cursor
    .forEach(quote => quotes = quote)
    .then(() => {
      res.render('home.ejs', { hello:hello, quotes:quotes });
    })
    .catch(() => {
      res.json({error: "Could not fetch the documents"})
    })
  // 
})
