// const express = require('express');
// const mongoose = require('mongoose');
// const Photos = require('../../database/index.js');
// const router = express.Router();
//
// router.route('/')
//   .get((req, res) => {
//     const id = req.params.id;
//     console.log(id)
//     Photos.findOne(id, (err, data) => {
//       console.log("params:", req.params)
//       console.log("hello from router")
//       if (err) {
//         res.sendStatus(500);
//       } else {
//         res.json(data);
//         console.log(data)
//       }
//     });
//   });
//
// module.exports = router;
