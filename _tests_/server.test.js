const request = require('supertest');
const app = require('../server/index.js');
const db = require('../database/index.js');
const testData = require('../data_test.js');


describe('Test the root path with GET', () =>
  test('it should respond to the GET request', () =>
    request(app).get('/').then(response =>
      expect(response.statusCode).toBe(200))));


describe('Test non-existent endpoint with POST', () =>
  test('it should respond to invalid POST request with 404', () =>
    request(app).post('/gobbledidook').then(response =>
      expect(response.statusCode).toBe(404))));


describe('Test Database', () => {
  test('it should insert records into database', () => {
    db.insertOne(testData, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserted')
      }
    });
  });

  test('it should retrieve record by ID', () => {
    db.findOne('1234', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('RESULT: ',result)
        expect(result.place_name).toBe('Some Place');
      }
    });
  });
});
