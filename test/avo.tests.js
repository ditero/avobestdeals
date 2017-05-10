const assert = require('assert');
const avo = require('../avo');

describe('The Avo function', function(){
  it('Should return the length of an Array', function(){
    assert.equal(4, avo("1 for R3, 2 for R7, 3 for R10, 5 for R14.50"));
  });


    // it('Should return the price per Avo', function(){
    //   assert.equal(3, PricePerAvo("1 for R3, 2 for R7, 3 for R10, 5 for R14.50."));
    // });
});
