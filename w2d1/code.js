/*
/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers

/* 5 Define a function reverse() that computes the reversal of a string.

/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */

//IIFE Code
    'use strict';
    //Sum using Rest api and fat arrow
function sum(x,y, ...more){
    let sum = x+y;
    more.forEach(s => sum += s)

    return sum;
}

//Muliply using Rest  //Can I also use reduce here ???
function product (a, b, ...more){
    let product = a*b;
    more.forEach(num => product *= num); 

    return product;
    
} 

//filterLongWords()
function filterLongWords(words, i){
    const LongWords  = words.filter( word => word.length > i);
   // words.forEach(word.);
    return LongWords;
}

//Another approach 
const LongWords2  = (words, i) => words.filter( word => word.length > i );


//Function to reverse a word
function reverse(word){
    let reversed = '';
    reversed = word.split("").reverse().join("");
    return reversed;

}

// Using functional Programmming
const solution = (word2) => word2.split("").reverse().join("");

/*console.log("The output of the Reversed is "+solution("Brian"));
console.log("The output of the LongWords is "+LongWords2(["Brian", "Joy", "Grace", "Gabriella"], 3));

console.log(`"The reverse of John  is "+${reverse("John")}`);
console.log(`"The sum of {1,2 ,3 ,4 ,5} is 15" ${sum(1,2 ,3 ,4 ,5)}`);
console.log(`"The Product of {1,2 ,3 ,4 ,5} is 120" ${product(1,2 ,3 ,4 ,5)}`);
console.log(`"The longer words than 4 xter of {boy, girl, Mother } is [Genesis and mother]"+${filterLongWords(["boy", "girl", "Mother", "Genesis"], 4 )}`);
*/


