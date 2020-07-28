//import { assert } from 'chai';
//const assert = require('chai').assert;
//const sayHello =  require('code').sayHello;

//import { sumNumbers } from 'code';
/*
describe('Code', function(){
    //firt Test
    it('Message to Print', function(){
        let result = sayHello();//function to test 
        assert.equal(result, 'expectedResult');
    });

    //second Test 
    it('Message to Print', function(){
        let result = sayHello();
        assert.typeOf(result, 'ExpectedType/string');
    });

});*/


describe('sum(a, b,..more)', function(){
     //first test 
     it('Add All Numbers supplied to the Function', function(){
         let result = sum(1,2,3,4,5);
         assert.equal(result, 15);
     });

     //Edit 
     describe('sum', () => {
        it('sums the values passed in as parameters', () => {
          assert.equal(sum(1, 2, 3, 4, 5), 15);
        });
      });
      
      //Test for the Product function 
      describe('multiply', () => {
        it('multiplies the values of passed in as parameters', () => {
          assert.equal(product(1,2 ,3 ,4 ,5), 120);
        });
      });
      
      describe('ReverseString', () => {
        it('reverses the given string passed as a parameter', () => {
          assert.equal(reverse('Brian'), 'nairB');
        });
      });
      
      describe('filterLongWords', () => {
        it('Creates an array of words from a gven array greater that passed in value', () => {
          const expected = ['great', 'wolves', 'music'];
          const actual = filterLongWords(['great', 'wolves', 'music', 'harp'], 4);
          for (let i = 0; i < expected.length; i++) {
            assert.equal(actual[i], expected[i]);
          }
     });
});

})
