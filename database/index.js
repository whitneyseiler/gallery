const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

const PhotosSchema = mongoose.Schema({
  ref: String,
  url: String,
});

const ReviewSchema = mongoose.Schema({
  name: String,
  avatar: String,
});

const photoSchema = mongoose.Schema({
  place_id: String,
  place_name: String,
  photos: [PhotosSchema],
  reviews: [ReviewSchema],
});

const Photos = mongoose.model('Photos', photoSchema);

// findAll retrieves all stories
function findAll(callback) {
  Photos.find({}, callback);
}

// findOne will retrieve the photo associated with the given id
function findOne(id, callback) {
  Photos.find({
    id: id,
  }, callback);
}

// insertOne will insert on entry into database
function insertOne(entry, callback) {
  Photos.create(entry, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
