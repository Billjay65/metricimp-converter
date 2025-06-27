'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  // define convert api endpoint route server
  // form in index.html is performing get request
  app.route('/api/convert')
  .get((req, res) => {
    // define convert api endpoint route server
    // form in index.html is performing GET request

    // get submitted input using query for GET request
    const input = req.query.input;

    // sanitize the input and return errors
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);

    // if both are incorrect, return error
    if (initNum === null && initUnit === 'Invalid unit') {
      return res.json({ error: 'invalid number and unit' });
    }

    // if initNum is not valid return error
    if (initNum === null) {
      return res.json({ error: 'invalid number' });
    }

    // if unit is not valid return error
    if (initUnit === 'Invalid unit') {
      return res.json({ error: 'invalid unit' });
    }

    // convert number and unit
    const returnNum = convertHandler.convert(initNum, initUnit);
    const returnUnit = convertHandler.getReturnUnit(initUnit);

    // return complete response string
    const responseString = convertHandler.getString(
      initNum, initUnit, returnNum, returnUnit
    );

    // respond with final conversion result
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: responseString
    });
  });

};
