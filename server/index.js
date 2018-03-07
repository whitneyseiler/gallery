const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const Photos = require('../database/index.js');
// const photoRouter = require('./routers/photoRouter.js');

const app = express();

// mongoose.connect('mongodb://localhost/photos');
app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, './../client/dist/index.html'));
});

app.get('/api/restaurants/:id/gallery', (req, res) => {
  const id = req.params.id;
  console.log(id)
  Photos.findOne(id, (err, data) => {
    console.log("params:", req.params)
    console.log("hello from router")
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
      console.log('DATA:', data)
    }
  });
});


app.listen(3001, () => console.log('Example app listening on port 3001!'));

module.exports = app;
