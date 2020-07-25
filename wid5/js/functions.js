/* runs test to see if expected argument is === to value returned by function2test argument */
function functionTester(expected, found) {

    // Checks if the arguments are array, if so it will compare element by element
    if(Array.isArray(expected) && Array.isArray(found)){
        if(expected.length !== found.length){
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }else{
            for(let i=0; i<expected.length; i++){
                if(expected[i] !== found[i]){
                    return "TEST FAILED.  Expected " + expected + " found " + found;
                }
            }

            return "TEST SUCCEEDED";
        }
    }else {
        if (expected === found) {
            return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    }    
}

/* function to compute the maximum of 2 arguments */
function max(x, y) {
if (x > y) {
    return x;
} else {
    return y;
}
}

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
return max(max(a, b), c);  
}

//Another solution
function maxOfThree2(x, y, z) {
let max = x;
if (y>x && y>z){
    max = y;
    return max
}
else if(z > x && z > y){
    max = z;
    return max;
}
else return max;
}


//function to tell whether a given character is a vowel or not
function isVowel(ch){
    if(!ch || ch.length > 1){
        return false;
    } else{
        // Convert to lower case letter
        ch = ch.toLowerCase();

        if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
            return true;
        } else{
            return false;
        }
    }
}

//Solution 2

function isVowel2(ch){
    if(!ch || ch.length > 1){
        return false;
    }
    else {
        ch = ch.toLowerCase();
        const vowels = new Array(a, e, i, o, u);
        for (let i = 0; i < vowels.length; i++){
            if(vowels[i] != ch)
            return false;
        }
        return true;
    }
}


//Solution to number 4- to sum and multiply members of an array
function sum(numbers){
    let sum = 0.0;

    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}

function multiply(numbers){
    let product = 1.0;

    for(let i=0; i<numbers.length; i++){
    product *= numbers[i];
    }

    return product;
}

//solution to no.5 , reversing a string 
function reverse(string){
    if(!string){
        return string;
    }

    let reversed = "";
   //start from the end and concatenate the characters of the given string

    for(let i=string.length - 1; i>=0; i--){
        reversed += string.charAt(i);
    }

    return reversed;
}

//Solution to 6, findng the longest word
function  findLongestWord1(words){
    if(!words || words.length == 0){
        return "Empty Array";
    }
    let max = words[0].length;
    let longestWord = words[0];

    for (let i = 0; i < words.length; i++){
      if(words[i].length > max){
          max = words[i].length;
          longestWord = words[i];
      }

    }
    return max;
}

//solution 2 to finding the length of the longest word
function  findLongestWord(words){
    if(!words || words.length == 0){
        return "Empty Array";
    }

    let maxLength = -1;

    for(let i=0; i<words.length; i++){

        let len = words[i].length;

        if(len > maxLength){
            maxLength = len;
        }
    }

    return maxLength;
}

//Solution to Question 7 function to filter logest words
//using functional programming solution 
function filterLongWords2(words, i){
    var longerThanI = words.filter(function(word){
           return word.length > i;
    });

    return longerThanI;
}

//another solution
function filterLongWords(words, num){
    let longWords = [];
    let word;

    for(let i=0; i<words.length; i++){
        word = words[i];
        if(word.length > num){
            longWords.push(word);
        }
    }

    return longWords;
}


// Tests
console.log("\tTest Cases");

// 1. Testing the max() function
console.log("Testing the max() function");
// Pass test case
console.log("\tExpected output of max(20,10) is 20  " + functionTester(20, max(20, 10)));
// Fail test case
console.log("\tExpected output of max(25,55) is 55  " + functionTester(25, max(25, 55)));

// 2. Testing the maxOfThree() function
console.log("Testing the maxOfThree() function");
// Pass test case
console.log("\tExpected output of maxOfThree2(5,4,44) is 44  " + functionTester(44, maxOfThree2(5, 4, 44)));
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(55, maxOfThree2(55, 4, 44)));

// Fail test case
console.log("\tExpected output of maxOfThree(55,4,44) is 55  " + functionTester(4, maxOfThree(55, 4, 44)));

// 3. Testing the isVowel() function
console.log("Testing the isVowel() function");
// Pass test case
console.log("\tExpected output of isVowel('e') is true  " + functionTester(true, isVowel("e")));
console.log("\tExpected output of isVowel('I') is true  " + functionTester(true, isVowel("I")));

// Fail test case
console.log("\tExpected output of isVowel('d') is false  " + functionTester(true, isVowel("d")));
console.log("\tExpected output of isVowel('A') is true  " + functionTester(false, isVowel("A")));

// 4. Test cases for sum() function
console.log("Testing the sum() function");
// Pass test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21  " + functionTester(21, sum([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of sum([1, 2, 3, 4, 5, 6]) is 21 " + functionTester(25, sum([1, 2, 3, 4, 5, 6])));

// 5. Test cases for multiply() function
console.log("Testing the multiply() function");
// Pass test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5, 6]) is 720  " + functionTester(720, multiply([1, 2, 3, 4, 5, 6])));
// Fail test case
console.log("\tExpected output of multiply([1, 2, 3, 4, 5]) is 120  " + functionTester(360, multiply([1, 2, 3, 4, 5])));

// 6. Test cases for reverse() function
console.log("Testing the reverse() function");
// Pass test case
console.log("\tExpected output of reverse('Computer') is  retupmoC " + functionTester("retupmoC", reverse("Computer")));
// Fail test case
console.log("\tExpected output of reverse('WOW') is  WOW " + functionTester("MOM", reverse("WOW")));

// 7. Test cases for findLongestWord() function
console.log("Testing the findLongestWord() function");
// Pass test case
console.log("\tExpected output of findLongestWord(['test', 'One', 'Orange']) is  6 " + functionTester(6, findLongestWord1(["test", "One", "Orange"])));
// Fail test case
console.log("\tExpected output of findLongestWord(['Two', 'One', 'Leg']) is  3 " + functionTester(1, findLongestWord(['Two', 'One', 'Leg'])));

// 8. Test cases for filterLongWords() function
console.log("Testing the filterLongWords() function");
// Pass test case
console.log("\tExpected output of filterLongWords2(['Particle', 'Mark', 'California', 'Field'], 5) is [Particle, California]  " + functionTester(["Particle", "California"], filterLongWords2(["Particle", "Mark", "California", "Field"], 5)));
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 10) is []  " + functionTester([], filterLongWords(["1", "11", "111"], 10)));
// Fail test case
console.log("\tExpected output of filterLongWords(['1', '11', '111'], 0) is 1, 11, 111  " + functionTester(["111"], filterLongWords(["1", "11", "111"], 0)));

