//Test
describe("BubbleSort Algorithm Test",  ()=> {
    it("Expected output of [6, 4, 0, 3, -2, 1].bubbleSort() is [-2, 0, 1, 3, 4, 6]  ", ()=> {
      assert.equal([6, 4, 0, 3, -2, 1].bubbleSort().toString(), '-2,0,1,3,4,6');
    });
  });

//Test for the filter function
//Test
describe("Filter Function",  ()=> {
    it("Expected output of 'The house is not nice'.filter('not') is 'The house is nice'  ", ()=> {
      assert.equal('The house is not nice'.filter('not'), 'The house is nice')
    });
  });

  //Test for Teacher Object
  describe("Prototype Attribute", () =>{

    it("Expected output of new Teacher().teach('WAP') is 'Prof. Michael Zijlstra is now teaching WAP'", ()=> {
      assert.equal(prof.teach("WAP"), 'Prof. Khan is now teaching Algorithm')
    });
    
  });