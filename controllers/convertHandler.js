function ConvertHandler() {
  // get submitted input string and return number
  this.getNum = function (input) {
    let result;

    const index = input.search(/[a-zA-Z]/);
    const numString = input.slice(0, index);

    // Handle double fractions
    if ((numString.match(/\//g) || []).length > 1) return null;

    if (numString.includes('/')) {
      const [num, denom] = numString.split('/');
      result = parseFloat(num) / parseFloat(denom);
    } else if (numString === '') {
      result = 1;
    } else {
      result = parseFloat(numString);
    }

    return isNaN(result) ? null : result;
  };

  this.getUnit = function (input) {
    let result;

    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];

    const firstCharIndex = input.search(/[a-zA-Z]/);
    const unitString = input.slice(firstCharIndex);
    let unit = unitString ? unitString.toLowerCase() : null;

    if (unit && unit.match(/^[a-zA-Z]{1,3}$/) && validUnits.includes(unit)) {
      result = unit === 'l' ? 'L' : unit;
      return result;
    } else {
      result = 'Invalid unit';
      return result;
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result;

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'L';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = undefined;
    }

    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;

    switch (unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l':
      case 'L':
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }

    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${parseFloat(returnNum.toFixed(5))} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
