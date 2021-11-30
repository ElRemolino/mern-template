const express = require('express')
const app = express()
const path = require('path');

const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, './client')));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})