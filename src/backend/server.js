const express = require("express");
const app = express();
const mongoose = require('mongoose');

const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/Tutorial')
  .catch(() => console.error('error connecting with DB'))
  .then(()=>{
    console.log("DB Connected Successfully");
});

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});