var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6);
  });

  it('it should subtract', function(){
    calculator.numberClick(3);
    calculator.operatorClick('-')
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 1);
  });

  it('it should multiply', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6);
  });

  it('it should divide', function(){
    calculator.numberClick(4);
    calculator.operatorClick('/')
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 2);
  });

  it('it should be able to click a number', function(){
    calculator.numberClick(4);
    assert.equal(calculator.runningTotal, 4);
  });

  it('it should be able to click an operator', function(){
    calculator.operatorClick('-');
    assert.equal(calculator.previousOperator, '-');
  });

  it('it should be able to click clear calc', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(2);
    calculator.operatorClick('=')
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  });

});
