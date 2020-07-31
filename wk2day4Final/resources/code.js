
//string filter
String.prototype.filter = function (banned) {
    let splitted = this.split(" ");
    return splitted.filter(s => s !== banned
    ).join(" ");
  };

//Bubble sort
Array.prototype.bubbleSort = function () {
    let length = this.length;
    for (let i = (length - 1); i >= 0; i--) {
      for (let j = (length - i); j > 0; j--) {
        if (this[j] < this[j - 1]) {
          let tmp = this[j];
          this[j] = this[j - 1];
          this[j - 1] = tmp;
        }
      }
    }
    return this;
  };

//creat teacher object
const Person = function() {};
Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};
Person.prototype.describe = function() {
    return `${this.name}, ${this.age} years old. `;
};
const Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

