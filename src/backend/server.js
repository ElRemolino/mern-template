const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/Tutorial')
  .catch(() => console.error('error connecting with DB'))
  .then(()=>{
    console.log("DB Connected Successfully");
});

app.use('/', express.static(path.join(__dirname, '../../dist')));

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});