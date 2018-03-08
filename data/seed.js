const data = require('./allData.js');
const mongoose = require('mongoose');
const Photos = require('../database/index.js');
const API_KEY = 'AIzaSyCjAQ33tNqsfUoF1CV0TDw8GcoHqSf3dgo';

mongoose.connect('mongodb://localhost/photos');

function seedDb() {
  data.forEach((place) => { // for each ID
    const entry = {
      place_id: place.result.place_id,
      place_name: place.result.name,
      photos: [],
      reviews: [],
    };
    // push photo details to entry
    const photos = place.result.photos;
    const PHOTOS_URL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=';

    for (let i = 0; i < photos.length; i += 1) {
      const photoRef = photos[i].photo_reference;
      const photoUrl = `${PHOTOS_URL}${photoRef}&key=${API_KEY}`;
      const details = {
        ref: photoRef,
        url: photoUrl,
        width: photos[i].width,
        height: photos[i].height,
      };
      entry.photos.push(details);
    }

    // push each review to entry
    const reviews = place.result.reviews;

    for (let j = 0; j < reviews.length; j += 1) {
      const review = {
        name: reviews[j].author_name,
        avatar: reviews[j].profile_photo_url,
      };
      entry.reviews.push(review);
    }
    // console.log('ENTRY:', entry)

    Photos.insertOne(entry, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
};

seedDb(data);

module.exports = seedDb;
