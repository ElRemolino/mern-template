const express = require('express');
const path = require('path');
const mongodb = require('mongodb');
const dotenv = require('dotenv');

dotenv.config()
const MongoClient = mongodb.MongoClient;

const app = express();
const port = process.env.PORT || 8000;

MongoClient.connect(
  process.env.FREE_DB_URI,
  {
    poolSize: 50,
    wtimeout:2500,
    useNewUrlParse: true
  }
  )
  .catch(err => {
    consol.error(err.stack);
    process.exit(1);
  })
  .then(async client => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })

// app.use(express.urlencoded({ extended: true }));
// app.use('/', express.static(path.join(__dirname, './client')));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
