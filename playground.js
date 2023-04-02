

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
function testLogicalAnd(val) {
    if (val <= 50) {
        if (val >= 25) {
            return "Yes";
        }
    }
    return "No";
}
testLogicalAnd(10);

//Use AND operator to make this easier 

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);



//COMPARISONS WITH THE LOGICAL OR OPERATOR
function testLogicalOr(val) {
    if (val < 10) {
        return "Outside";
    }

    if (val > 20) {
        return "Outside";
    }
    return "Inside";
}
//Use OR operator to make this easier 
function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

//ELSE STATEMENTS
function testElse(val) {
    var result = ""
    if (val > 5) {
        result = "Bigger than 5";
    }
    if (val <= 5) {
        result = "5 or smaller";
    }
    return result;
}
//use else statements to execute alternate block of code if false
function testElse(val) {
    var result = ""
    if (val > 5) {
        result = "Bigger than 5";
    }
    else {
    return result;
    }
}

//ELSE IF STATEMENTS
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

//LOGICAL ORDER IN IF ELSE STATEMENTS
//when using else if statements, order is very important
function orderMyLogic(val) {
    if (val < 10) {
        return "Less than 10"; //once a condition is met the rest will not be run
    } else if (val < 5) {//THIS IS WRONG!
        return "Less than 5";
    } else {
        return "Greater than or equal to 10";
    }
}
console.log(orderMyLogic(7));

//CHAINING IF ELSE STATEMENTS 
function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge"
    }
}
console.log(testSize(19))


//GOLD CODE 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bodey", "Go Home!"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1 ) {
        return names[4]
    } else if (strokes == par + 2 ) {
        return names[5]
    } else if (strokes >= par + 3 ) {
        return names[6]
    }
    return "hi";
}
console.log(golfScore(5, 1))


//SWITCH STATEMENTS
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:              //uses strict equality operator 
         answer = "alpha";
         break;              //goes out of statement when condition is met 
        case 2: 
         answer = "beta";
         break;
        case 3: 
         answer = "gamma";
         break;
        case 4:
         answer = "delta";
         break;
    }

    return answer;
}
console.log(caseInSwitch(4))


//DEFAULT OPTION IN SWITCH STATEMENTS 
function switchOfStuff(val) {
    var answer = ""
    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat"
            break;
        default: 
            answer = "stuff"
            break;
    }
    return answer;
}
console.log(switchOfStuff(5))


//MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(5))


//REPLACING IF ELSE CHAINS WITH SWITCH - switch statements can be easier to read 
function chainToSwitch(val) {
    var answer = "";
    if (val === "bob") {
        answer = "Marley";
    } else if (val === 42) {
        answer = "The Answer";
    } else if (val === 1) {
        answer = "There is no #1";
    } else if (val === 99) {
        answer = "Missed me by this much!";
    } else if (val === 7) {
        answer = "Ate Nine";
    }
    return answer;
}
console.log(chainToSwitch("bob"))

//changed to switch 
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7: 
            answer = "Ate Nine";
            break;
    }
    
    return answer;
}
console.log(chainToSwitch(7))


//RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a, b) {
    if (a < b) {
        return true;
    } else {
        return false; // this code is not needed 
    }

}
console.log(isLess(9, 10))
//as all comparison operators return a Boolean true or false value

function isLesss(a, b) {
    return a < b;
}
console.log(isLesss(15, 10)) //wow!


//RETURNING EARLY PATTERN FROM FUNCTIONS 
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));


//COUNTING CARDS
var count = 0;
function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    }

    var holdbet = "Hold";
    if (count > 0) {
        holdbet = "bet";
    }

    return count + " " + holdbet;
}
cc(2); cc("K"); cc(10); cc("K"); cc("A");
console.log(cc(4))


//BUILD JAVASCRIPT OBJECTS
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

console.log(ourDog)


//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION - one of two ways to access object
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue + " " + shirtValue)

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj2["an entree"];
var drinkValue = testObj2["the drink"];

//ACCESSING OBJECT PROPERTIES WITH VARIABLES 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];


//UPDATING OBJECT PROPERTIES 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.name = "Happy Camper"; // use dot notation
console.log(ourDog)

//ADD NEW PROPERTIES TO AN OBJECT
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
ourDog.bark = "bow-wow"
console.log(ourDog)

//DELETE PROPERTIES FROM OBJECTS
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
};
delete ourDog.bark
console.log(ourDog)

//USING OBJECTS FOR LOOKUPS
function phoneticLookup(val){
    var result = "";
    switch(val) {
        case "alpha":
            result = "Adams";
            break;
        case "bravo":
            result = "Boston";
            break;
        case "charlie":
            result = "Chicago";
            break;
        case "delta":
            result = "Denver";
            break;
        case "echo":
            result = "Easy";
            break;
        case "foxtrot":
            result = "Frank";
            break;
    }
    return result;
}
console.log(phoneticLookup("alpha"));
//to use an object to look up do this .
function phoneticLookupObj(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    };
    result = lookup[val]
    return result;
}
console.log(phoneticLookupObj("bravo"))

//TESTING OBJECTS FOR PROPERTIES 
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp) {
    
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
    return "Not Found";
    }
};
console.log(checkObj("gift"))

//MANIPULATING COMPLEX OBJECTS
var myMusic = [
    {
        "artist": "Billiy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Tom Hill",
        "title": "Dance if you want to",
        "release_year": 2023,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }
]

//ACCESSING NESTED OBJECTS
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; //remember key:value pairs which have a space need to be in []
console.log(gloveBoxContents)

//ACCESSING NESTED ARRAYS
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
var secondTree = myPlants[1].list[1]; //can index through like any other array 
console.log(secondTree)

//RECORD COLLECTION 
// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
      if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value 
    } else if (prop === "tracks") {
      records[id][prop] = records[id][prop] || [];
      records[id][prop].push(value);
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value); }  
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
  updateRecords(recordCollection, 2548, "artist", "")
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love")
  updateRecords(recordCollection, 2468, "tracks", "Free")
  updateRecords(recordCollection, 2548, "tracks", "")
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide")
  
  console.log(recordCollection)

//ITERATE WITH WHILE LOOPS
var myArray = [];
var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//ITERATE WITH FOR LOOPS - most common type of loop in JS
var ourArray = [];

for (var i = 0; i < 5; i++) {         //(var i = 0;             i < 5;           i++)
    ourArray.push(i);                 //initialization        //condition       //"final" expression
}
console.log(ourArray);

//another for loop with the numbers 1 thru 5
var myArray = [];
for (i = 1; i < 6; i++) {
    myArray.push(i);
}
console.log(myArray)

//ITERATE ODD NUMBERS WITH A FOR LOOP
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray)

//ODD
var oddArray = [];

for (var i = 1; i < 10; i += 2) {
    oddArray.push(i);
}
console.log(oddArray)

//COUNT BACKWARDS WITH A FOR LOOP
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray)

//ITERATE THROUGH AN ARRAY WITH A FOR LOOP - so it completes the for loop before returning it seems!
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);


//NESTING FOR LOOPS 
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++)
        product *= arr[i][j];
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]])

console.log(product)

//ITERATE WITH DO...WHILE LOOPS
//A while loop first checks the condition before it runs any code within the loop.
//A DO while loop will always run atleast one time and then check the condition 
var myArray = [];
var i = 10;

do { 
    myArray.push(i);
    i++
} while (i < 5)
console.log(i, myArray);

//PROFILE LOOKUP
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
        return contacts[i][prop] || "No such property"
  
      }
    }
    return "No such contact";
  }
  
  lookUpProfile("Akira", "likes");   

//GENERATE RANDOM FACTIONS
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

//GENERATE RANDOM WHOLE NUMBERS
var randomNumberBetween0and19 = Math.floor(Math.random() * 20); //Math.floor rounds down to the nearist whole number
console.log(randomNumberBetween0and19)

function randomWholeNum() {
    
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE 
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(5, 15));

//USE THE PARSEINT FUNCTION - takes a string and returns an integer
function converToInteger(str) {
    return parseInt(str);
}
console.log(converToInteger("56")) 

//USE THE PARESINT FUNCTION WITH RADIX
function convertToInteger(str) {
    return parseInt(str, 2)

}
console.log(converToInteger("10011")); //This string has now been converted to a binary number "Base 2"

//USE THE CONDITIONAL TERNARY OPERATOR - like an if else statement 
function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));

//USE MULTIPLE CONDITIONAL TERNARY OPERATORS - holy shit this is cool
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"

}
console.log(checkSign(0));

//DIFFERENCES BETWEEN THE VAR AND LET KEYWORDS
let catName = "Quincy";
var quote;

catName = "Beau"; //var variables we can declare more than once
                      //let variables you can only declare once in the same scope
                      //if using let you can just update the variable 
function catTalk() {  // you can "use strict" to catch mistakes at top of file 
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";
}
console.log(catTalk());

//COMPARE SCOPE OF THE VAR AND LET KEYWORDS 
//var variables are declared glabally or locally if declared inside a function 
//let is limited to the scope of the block statement or expression that it was declared in

function checkScope() {
    "use strict";
    let i = "function scope"; // this let function is only able to be accessed within this function therefore its function scope 
    if (true) {
        let i = "block scope"; //in this case the let inside this block of code cannot be accessed outside so it always block scope
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope()

//DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD
function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool!"; //if set to const the variable cannot be updated 
                                      //When using CONST it is common to use all CAPS for the name of the variable 
    // sentence = str + " is amazing!" 

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

//MUTATE AN ARRAY DECLARED WITH CONST
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);


//PREVENT OBJECT MUTATION
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS) //stops the object within the const MATH_CONSTANTS variable being updated 

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//USE ARROW FUNCTIONS TO WRITE CONSISE ANONYMOUS FUNCTIONS
 //var magic = function() { // this is called an ANONYMOUS function.
 //   return new Date();
 //};
// when you have an anonymous function you can use arrow functions to make the code easier to write 
const magic = () => new Date(); //is only returning one value 

//WRITE ARROW FUNCTIONS WITH PARAMETERS 
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
//re-write in arrow function 
const MYCONCAT2 = (arr1, arr2) => arr1.concat(arr2);
console.log(MYCONCAT2([1, 2], [3, 4, 5]));

//WRITE HIGHER ORDER ARROW FUNCTIONS
//arrow functinons work really well with higher order functions such as map/filter/reduce.
const REALNUMBERARRAY = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];


const SQUARELIST = (arr) => {
    const SQUAREDINTEGERS = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return SQUAREDINTEGERS;
};

const SQUAREDINTEGERS = SQUARELIST(REALNUMBERARRAY);
console.log(SQUAREDINTEGERS);

//WRITE HIGHER ORDER ARROW FUNCTIONS 
const increment = (function () {
    return function increment(number, value = 1) { //if a value isn't passed in it will default to 1
        return number + value;
    };
})();
console.log(increment(5, 5));
console.log(increment(5));

//USE THE REST OPERATOR WITH FUNCTION PARAMETERS
const sum2 = (function () {
    return function sum2(...args) { //using the ...args means we can pass in as many arguments as we want 
        
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum2(1, 2, 3, 4)); 


//USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; //not copying arr1 to arr 2 we are not making arr2 equal to arr1. This is called the SPREAD operator 
    arr1[0] = 'potato'
})();
console.log(arr2);






//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; //old way 
var y = voxel.y;
var z = voxel.z;

//ney way - much quicker 
var { x : a, y : b, z : x } = voxel; // a = 3.6, b = 7.4, c = 6.54
console.log(a)


//below targeting the values from an object 
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today);

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS 
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  const {today : highToday, tomorrow : highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday, highTomorrow)


//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM NESTED OBJECTS
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const {today: {low: lowToday2, high: highToday2}} = LOCAL_FORECAST
console.log(highToday2, lowToday2)
  

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS
let aa = 8, bb = 6;

(() => {
  [aa, bb] = [bb, aa]
})();
console.log(aa);
console.log(bb);

//USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR 
function removeFirstTwo(list) {
    
    const [,, ...shorterList] = list; //you could assign the first two numbers in the array to a variable like aa and bb or leave empty to skip
    
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  console.log(source)
  console.log(sourceWithoutFirstTwo)

  //USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  const half = (function() { //this is commonly used with API calls 
    return function half({max, min}) {
        return (max + min) / 2.0;
    };
  })();
console.log(stats);
console.log(half(stats));


//CREATE STRINGS USING TEMPLATE LITERALS Template literals allow you to 
//                                           create multi-line strings and to use string interpolation features to create strings.
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

  //for an array
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`) // must use ` 
    }
    
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList)
  

  //WRITE CONCISE OBJECT LITERAL DECLARATIONS USING OBJECT PROPERTY SHORTHAND
  const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender,
    };

  };
  console.log(createPerson("Zodiac Hasbro", 56, "Male"));
//shorthand

const createMe = (myname, myage, mygender) => ({myname, myage, mygender});
console.log(createMe("Tom Hill", 27, "male"));



//WRITE CONCISE DECLARATIVE FUNCTIONS WITH ES6
//long way to put finction within in object
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
  //quicker way
const bicycleqk = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycleqk.setGear(3);
  console.log(bicycleqk.gear);


  //USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION 
  // Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }
  
  // Implicit constructor 
  class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
  const zeus = new SpaceShuttle('Jupiter');
  // prints To Jupiter! in console
  zeus.takeOff();
  
  const atlas = new Rocket();
  // prints To the moon! in console
  atlas.launch();


//simple example 
class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'




  //USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
  class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);


  //another example 
  function makeClass() {
    class Thermostat {
      constructor(temp) {
        this._temp = 5/9 * (temp - 32);//"this" means variable is only accessable within this class - 
      }                                //whenever you start a variable with "_" genrally signify it's a private variable. Just for that scope or class
      get temperature(){
        return this._temp;
      }
      set temperature(updatedTemp){
      this._temp = updatedTemp;
      }
    } 
    return Thermostat;
    }
    
    
    
    const Thermostat = makeClass();
    const thermos = new Thermostat(76); // Setting in Fahrenheit scale
    let temp = thermos.temperature; // 24.44 in Celsius
    thermos.temperature = 26;
    temp = thermos.temperature; // 26 in Celsius#
    console.log(temp)
    
    
    
    
                                      
