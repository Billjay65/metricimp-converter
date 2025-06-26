const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  // #1
  test('Read a whole number input', function () {
    assert.equal(convertHandler.getNum('12mi'), 12, 
      'Whole Number is returned from input string');
  });
  // #2
  test('Read a decimal number input', function () {
    assert.equal(convertHandler.getNum('12.34mi'), 12.34, 
      'Decimal number is returned from input string');
  });
  // #3
  test('Read fractional input', function () {
    assert.equal(convertHandler.getNum('1/2mi'), '1/2',
      'Fraction is returned from input string');
  });
  // #4
  test('Read a fractional input with a decimal', function () {
    assert.equal(convertHandler.getNum('0.5km'), '0.5',
      'Decimal fractional input is returned from input string')
  });
  // #5
  test('Return error on a double-fraction', function () {
    assert.equal(convertHandler.getNum('3/45/42km'), 
      'Error: double fraction number',
      'Error is returned if input is double-fraction');
  });
  // #6
  test('Return default input 1 when no numerical input', function () {
    assert.equal(convertHandler.getNum('d34'), 
      1, '1 is returned if input is not numeric');
  });
});