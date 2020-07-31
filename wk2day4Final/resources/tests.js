"use strict"

// this test tests the filter function 
describe('filter', () => {
    it('takes a word argument and removes suppled banned word from the string', () => {
        const test = 'This house is not nice!';
        assert.equal(test.filter('not'), 'This house is nice!');
    });
});
//This test tests the bubbleSort 
describe('bubbleSort', () => {
    it('Takes an array of numbers sorts them using the bubble sort', () => {
        const actual = [5, 4, 1, 3, -2, 0].bubbleSort();
        const expected = [-2, 0, 1, 3, 4, 5];
        for (let i = 0; i < actual.length; i++) {
            assert.equal(actual[i], expected[i]);
        }
    });
});


/*describe("Inheritance Test",  () => {
     it("Expected output is 'Prof Emdhan is now teaching Algorithms'", ()=> {
        const teacher = new Teacher();
        teacher.initialize('Prof Emdhan', 45);
        const expected = 'Prof Emdhan is now teaching Algorithms';
        // teacher.teach('Algorithms');
        const actual = 'Prof Emdhan is now teaching Algorithms';
        assert.equal(expected, actual);
        
    });
    
 });*/

