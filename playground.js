

var number = 5; // inline comment 

/* this is a
multi-line comment */

/* Data types:
Undefined(this means empty), null, boolean, string, symbol, number, and object(stores key:value pairs) 
*/

// decalring variables 

var myName = "Tom"; 

myName = 8; // a variable can be any of the data types.

//other ways to declare a variable

/* let ourName = "freeCodeCamp"; */ // only used in scope of where it is declared 

const pi = 3.14; // variable that cannot be changed 

//STORING VALUES WITH THE ASSINGMENT OPERATOR

var a; // assining a variable

var b = 2; //declaring a variable

//after a variable has been assinged you can give it a value
console.log(a)
a = 7;

b = a;
console.log(a)

//INITIALIZING VARIABLES WITH THE ASSIGNMENT OPERATOR

var a = 9;

//UNINITIALIZING VARIABLES = value is undefined 

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//CASE SENSITIVITY IN VARIABLES 

//Declarations 
var StUdLyCapVaR; // this sucks
var properCamelCase; // this is camel case
var titleCaseOver;

//Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//ADDING NUMBERS
var sum = 10 + 10;
console.log(sum)

//SUBTRACTING NUMBERS
var difference = 45 - 133;
console.log(difference)

//MULTIPLYING NUMBERS
var product = 8 * 10;

//DIVIDING NUMBERS
var quotient = 66 / 33;

//INCREMENTING NUMBERS
var myVAR = 87;
myVAR = myVAR + 1;
//or
myVAR++;

//DECREMENTING NUMBERS
var myVAR = 11;
myVAR = myVAR - 1;
//or
myVAR--

//DECIMAL NUMBERS
var ourDecimal = 5.7;
var myDecimal = 0.009;

//MULTIPLYING DECIMAL
var product = 2.0 * 2.5;
console.log(product)

//DIVIDE DECIMALS
var quotient = 4.4 / 2.0;

//FINDING A REMAINDER -  if you can divide a number by 2 and the remainder = 0 that means the number is even
var remainder;
remainder = 11 % 3;
console.log(remainder)

//COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION
var a = 3;
var b = 17;
var c = 12;

a = a + 12;
//or you can do short hand of 
a += 12; //its that same thing

//COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
var a = 3;
var b = 17;
var c = 12;

b = b - 12;
//or you can do short hand of 
b -= 12; //its that same thing

//COMPOUND ASSIGNMENT WITH AUGMENTED MULTIPLICATION
var a = 3;
var b = 17;
var c = 12;

c = c * 12;
//or you can do short hand of 
c *= 12; //its that same thing

//COMPOUND ASSIGNMENT WITH AUGMENTED DIVISION
var a = 3;
var b = 17;
var c = 12;

c = c / 6;
//or you can do short hand of 
c /= 6; //its that same thing


//DECLARING STRING VARIABLES 

var firstName = "Alan";
var lastName = "Turing";

//ESCAPING LITERAL QUOTES IN STRINGS
var myStr = "I am a \"double quoted\" string inside \"double quotes\""; //sometimes string containes quotes 
//use backslash to "escape"

//QUOTING STRINGS WITH SINGLE QUOTES, you can use different types of quotes so you don't have to use escape characters
var myStr = '<a href="http://www.example.com" target="_blank">link</a>'
//can also use backticks
var myStr = `'<a href="http://www.example.com" target="_blank">link</a>'`

//ESCAPE SEQUENCES IN STRINGS
/*****
 CODE OUTPUT
 \'   single quote
 \"   double quote
 \\   backslash
 \n   newline
 \r   carriage return
 \t   tab
 \b   backspace 
 \f   form feed
 */
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr)

//CONCATENATING STRINGS WITH THE PLUS OPERATOR
var ourStr = "I come first. " + "I come second.";

//CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR 
var ourStr = "I come first. ";
ourStr += "I come second.";

//CONSTRUCTING STRONGS WITH VARIABLES
var ourName ="freeCodeCamp";
var ourStr ="Hello, our name is " + ourName + ", how are you?";
console.log(ourStr)

//APPENDING VARIABLES TO STRINGS 
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

//FIND LENGTH OF STRING 
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength)

//BRACKET NOTATION TO FIND CHARACTER IN STRING
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0]
console.log(firstLetterOfFirstName)

//STRING IMMUTABILITY 
var myStr ="Jello World";

/* myStr[0] = "H"; */ // NOT POSSIBLE

myStr = "Hello World" // Must replace whole thing

//BRACKET NOTATION TO FIND NTH CHARACTER IN STRING
var firstName = "Ada"
var secondLetterOfFirstName = firstName[1];

//BRACKET NOTATION TO FIND LAST CHARACTER IN A STRING 
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

//BRACKET NOTATION TO FIND NTH-TO-LAST CHARACTER IN STRING
var firstName = "Ada";
var thirdLetterOfFirstName = firstName[firstName.length - 3];

//WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

//STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23] // always square brackets - elements of array can be any data type 

//NESTED ARRAY - or multi dimentional array 
var ourArray = [["the universe", 42], ["everything", 101010]];

//ACCESS ARRAY DATA WITH INDEXES
var ourArray = [50,60,70];
var ourData = ourArray[0]; //equals 50

//MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99]

//ACCESS MULTI-DIMENTIONAL ARRAYS WITH INDEXES
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[0][0]; //first [0] points to first array - second [0] points to first index in the first array 

//MANIPULATE ARRAYS WITH push()
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["stimpson", "J", "cat", ["happy", "joy"]]

//MANIPULATE ARRAYS WITH pop() - removes the last array element 
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

//MANIPULATE ARRAYS WITH shift() - removes the first array element 
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

//MANIPULATE ARRAYS WITH unshift() - adds element to the beginning of the array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

//SHOPPING LIST - 50:37
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

//WRITE REUSABLE CODE WITH FUNCTIONS - ourReusableFunction = function name 
function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction(); // function call

//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5 

//GLOBAL SCOPE AND FUNCTIONS - scope
var myGlobal = 10;
function fun1() {
    oopsGlobal = 5; // if var is placed infront of oopsGlobal then variable will not be global scope and will only be local to function
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1()
fun2()

//LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
/* console.log(myVar); */ //shows error as myVar is local scope to the function

//GLOBAL VS. LOCAL SCOPE IN FUNCTIONS
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater" // local variables will take precidence over the global variable 
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear) //takes the global variable of outerWear


//RETURN A VALUE FROM A FUNCTION
function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));
//another function 
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5))

//UNDERSTANDING UNDERFINED VALUE RETURNED FROM A FUNCTION 
var sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log(addThree(sum))

//ASSIGNMENT WITH A RETURNED VALUE
var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed) //prints value of 5

//STAND IN LINE - A QUEUE is an abstract data structure where items are kept in order 
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//BOOLEAN VALUES
function welcomeToBooleans() {
    return false;
}

//USE CONDITIONAL LOGIC WITH IF STATEMENTS 
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}
console.log(ourTrueOrFalse(true))


function trueOrFalse(wasThatTrue) {
   if (wasThatTrue) {
    return "Yes, that was true";
   }
   return "No, that was false";
}
console.log(trueOrFalse(true));

//COMPARISON WITH THE EQUALITY OPERATOR 
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10))

//COMPARISON WITH THE STRICT EQUALITY OPERATOR 
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));
/* 
3 == '3' - returns equal
3 === '3' - returns not equal 
*/

//THE INEQUALITY OPERATOR 
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual(10));

//COMPARISON WITH THE STRICT INEQUALITY OPERATOR
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(17));

//COMPARISONS WITH THE LOGICAL AND OPERATOR 
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10))

//COMPARISON WITH THE GREATER THAN OR EQUAL TO OPERATOR 
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}
console.log(testGreaterThanOrEqual(10))

//COMPARISON WITH THE LESS THAN OPERATOR 
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10))

//COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR 
function testLessThanOrEqual(val) {
    if (val <= 25) {
        return "25 or Under";
    }
    if (val <= 55) {
        return "55 or Under";
    }
    return "56 or Over";
}
console.log(testLessThanOrEqual(55))


// AND / OR Operators 

