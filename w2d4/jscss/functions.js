//"use strict";
//1....Filtering banned words from the provided string 

String.prototype.filter = function (banned) {
  let ArrayOfWord = this.split(" ");
  return ArrayOfWord.filter(s => s !== banned
  ).join(" ");
};
console.log("The house is not nice".filter("not"));



//2 BuubleSort Algorithm on Array Object
Array.prototype.bubbleSort = function () {
  let len = this.length;
  for (let i = (len - 1); i >= 0; i--) {
    for (let j = (len - i); j > 0; j--) {
      if (this[j] < this[j - 1]) {
        let tmp = this[j];
        this[j] = this[j - 1];
        this[j - 1] = tmp;
      }
    }
  }
  return this;
};
console.log([6, 4, 0, 3, -2, 1].bubbleSort());


//3Constructing Teacher from Person
var Person = function () { };
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  return this.name +""+ this.age+"years old";
};

// var Student = function(){
//     Student.prototype = new Person();
//     Student.prototype.learn = function(subject){
//         console.log(this.name +"just learned "+ subject);
//     }
// }

// var me = new Student();
// me.initialize("John", 35);
// me.learn("Inheritance");

var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return (this.name + " is now teaching " + subject);
};

var tech = new Teacher();

tech.initialize("Prof. Khan",56);
//tech.teach("Algorith");
console.log(tech.teach("Algorithm"));

