const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);
  suite('Integration tests with chai-http', function () {
    // #1
    test('Test GET /api/convert with input such as 10L', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '10L' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
    });
    // #2
    test('Test GET /api/convert with invalid input such as 32g', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '32g' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'invalid unit');
          done();
        });
    });
    // #3
    test('Test GET /api/convert with invalid number input such as 3/7.2/4kg', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '3/7.2/4kg' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'invalid number');
          done();
        });
    });
    // #4
    test('Test GET /api/convert with invalid number and unit such as 3/7.2/4kilomegagram', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '3/7.2/4kilomegagram' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'invalid number and unit');
          done();
        });
    });
    // #5
    test('Test GET /api/convert with no number such as kg', function (done) {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '3/7.2/4kilomegagram' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'invalid number and unit');
          done();
        });
    });
  });
});
