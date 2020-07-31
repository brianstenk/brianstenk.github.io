     //Test for the Sum
     describe('Sum', () => {
        it('sums the values passed in as parameters', () => {
          assert.equal(sum(1, 2, 3, 4, 5), 15);
        });
        it('sums the values passed in as parameters, Prduce a sum greater the expected', () => {
            assert.notEqual(sum(1, 2, 3, 4, 5), 17);
          });
      });
      
      //Test for the Product function 
      describe('Multiply', () => {
        it('multiplies the values of passed in as parameters', () => {
          assert.equal(product(1,2 ,3 ,4 ,5), 120);
        });
      });
      
      //Test for the Reverse of teh String function 
      describe('ReverseString', () => {
        it('reverses the given string passed as a parameter', () => {
          assert.equal(reverse('Brian'), 'nairB');
        });

      });

      //Test for filtering the Long words  function 
      describe('filterLongWords', () => {
        it('Creates an array of words from a gven array greater that passed in value', () => {
          const expected = ['great', 'wolves', 'music'];
          const actual = filterLongWords(['great', 'wolves', 'music', 'harp'], 4);
          for (let i = 0; i < expected.length; i++) {
            assert.equal(actual[i], expected[i]);
          }
     });
});


