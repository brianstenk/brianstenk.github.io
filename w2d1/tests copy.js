/*     
     (function(){
     //Test for the Sum
     describe('Test Cases', () => {
        it('sums the values passed in as parameters', () => {
          assert.equal(sum(1, 2, 3, 4, 5), 15);
        })
        it('sums the values passed in as parameters, Prduce a sum greater the expected', () => {
            assert.notEqual(sum(1, 2, 3, 4, 5), 17);
          })
      //Test for the Product function 
   
        it('multiplies the values of passed in as parameters', () => {
          assert.equal(product(1,2 ,3 ,4 ,5), 120);
        })
      //Test for the Reverse of teh String function 
     
        it('reverses the given string passed as a parameter', () => {
          assert.equal(reverse('Brian'), 'nairB');
        })
      //Test for filtering the Long words  function 
    
        it('Creates an array of words from a gven array greater that passed in value', () => {
          const expected = ['great', 'wolves', 'music'];
          const actual = filterLongWords(['great', 'wolves', 'music', 'harp'], 4);
          for (let i = 0; i < expected.length; i++) {
            assert.equal(actual[i], expected[i]);
          }
     })
});

})();

x= 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
console.log(x);
document.write(x);

console.log(a);
document.write(a);



var f = function(a, b, c){
b = a;

console.log(b);
document.write(b);
b = c;
var x = 5;

}

f(a, b, c);
console.log(b);
document.write(b);
var x = 10;

}

c(8, 9, 10);
console.log(b);
document.write(b);

console.log(x);
document.write(x);*/


//scope tests
//var p, q; 
//console.log(q);
//console.log(p);
//Scope A - We cant access varriables in A and B
function xFunc(){
  //scope B
  //console.log(q);
  p= 8;
  function yFunc(){
    //scope C 
   var q= 10;
   console.log(p);
  };
//  console.log(q);
  yFunc();
}
//console.log(q);
xFunc();


const circle = {
 radius : 1,
 get area(){
   return Math.PI * this.radius* this.radius;
 }

};
circle.radius = 3;
console.log(circle.area)


//IIFE Module patter
var counter = (function(){
  //private
  let count = 0;

  //public
  return {
    //get : function(){ return count; },
   // set : function(value){ count = value;},
    //value : count, //Closure
    add: function(){
      count+=1;
      console.log("After incremneting "+count);
    },

    reset: function(){
      count = 0;
    }
  }
 
})();

console.log("Testing");
counter.add();
counter.add();
counter.add();
counter.add();
//console.log(counter.count);
//counter.set(7);
