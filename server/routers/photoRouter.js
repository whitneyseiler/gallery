const express = require('express');
const mongoose = require('mongoose');
const Photos = require('../../database/index.js');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    let id = req.query.place_id;
    Photos.findOne(id, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.json(data);
        // console.log(data)
      }
    });
  });

// Here we use express's route params
router.route('/:id')
  .get((req, res) => {console.log('hello from server'); });

module.exports = router;
