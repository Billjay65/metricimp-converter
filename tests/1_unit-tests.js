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
  // #7
  test('Read each valid input unit', function () {
    assert.equal(convertHandler.getUnit('34mi'), 'mi',
      'Unit is returned from input string');
  });
  // #8
  test('Return an error for invalid input unit', function () {
    assert.equal(convertHandler.getUnit('34fhla'), 'Invalid unit',
      'Error is returned for an invalid input unit');
  });
  // #9
  test('Return correct return unit', function () {
    assert.equal(convertHandler.getReturnUnit('L'), 'L',
      'Return unit is returned for each valid input unit, L');
    assert.equal(convertHandler.getReturnUnit('MI'), 'mi',
      'Return unit is returned for each valid input unit, MI');
  });
  // #10
  test('Return spelled-out string unit', function () {
    assert.equal(convertHandler.spellOutUnit('mi'), 'miles',
      'Spelled-out string is returned for valid input unit');
  });
  // #11
  test('Convert gal to L', function () {
    assert.equal(convertHandler.convert(20, 'gal'), 75.7082,
      'gal is converted to L');
  });
  // #12
  test('Convert L to gal', function () {
    assert.equal(convertHandler.convert(20, 'L'), 5.283443537159779,
      'L is converted to gal');
  });
  // #13
  test('Convert mi to km', function () {
    assert.equal(convertHandler.convert(20, 'mi'), 32.1868,
      'mi is converted to km');
  });
  // #14
  test('Convert km to mi', function () {
    assert.equal(convertHandler.convert(15, 'km'), 9.320591049747101,
      'km is converted to mi');
  });
  // #15
  test('Convert lbs to kg', function () {
    assert.equal(convertHandler.convert(15, 'lbs'), 6.8038799999999995,
      'lbs is converted to kg');
  });
  // #16
  test('Convert kg to lbs', function () {
    assert.equal(convertHandler.convert(15, 'kg'), 33.06936630275666,
      'kg is converted to lbs');
  });
});