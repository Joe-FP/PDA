var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // ======== TASK 4 ========

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('Do the number buttons work to update the display of the running total', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24');
  });

  it('Can we chain multiple operations together', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('24');
  });

  it('Do multiple operations work for positive numbers?', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3');
  });

  it('Do multiple operations work for negative numbers?', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-6');
  });

  it('Do multiple operations work for decimals?', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-0.25');
  });

  it('Do multiple operations work for very large numbers?', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2997');
  });

  it('Dividing by zero should return an error', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number9')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal("Can't divide by Zero.");
  });

});
