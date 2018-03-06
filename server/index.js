const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const photoRouter = require('./routers/photoRouter.js');

const app = express();

// mongoose.connect('mongodb://localhost/photos');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/photo', photoRouter);

app.get('/', (req, res) => res.status(200).send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

module.exports = app;
