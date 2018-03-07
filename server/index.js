const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const photoRouter = require('./routers/photoRouter.js');

const app = express();

// mongoose.connect('mongodb://localhost/photos');

app.use(cors());

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));

// app.get('/hello', (req, res) => res.status(200).send('Hello World!'));

// app.get('/restaurants/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

app.get('/api/restaurants/:id', photoRouter);

app.listen(3001, () => console.log('Example app listening on port 3001!'));

module.exports = app;
