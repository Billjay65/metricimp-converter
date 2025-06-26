function ConvertHandler() {
  // get submitted input string and return number
  this.getNum = function(input) {
    let result;

    // match different types of input
    // match whole and decimal numbers
    let matchNumber = input.match(/^(\d*\.?\d+)(?=[a-zA-Z])/);
    let resultNumber = matchNumber ? parseFloat(matchNumber[1]) : null;

    // match fractional input 
    // Match fractional input like "1/2mi"
    const matchFraction = input.match(/^(\d+\/\d+)(?=[a-zA-Z])/);
    const resultFraction = matchFraction ? matchFraction[1] : null;
    
    // match double-fraction
    matchDoubleFrac = input.match(/^(\d+\/\d+\/\d+)(?=[a-zA-Z])/)
    let resultDoubleFrac = matchDoubleFrac ? matchDoubleFrac[1] : null;

    // return result based on input matched
    if (resultNumber) {
      result = resultNumber;
      return result;
    } else if (resultFraction) {
      result = resultFraction;
      return result
    } else if (resultDoubleFrac) {
      result = 'Error: double fraction number';
      return result;
    } else {
      // return default of 1 when no numerical
      // input is provided
      result = 1;
      return result;
    }
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
