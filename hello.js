/*JS in a file */
$ touch hello.js  // creating a JavaScript file (with a .js file extension)
//Listing 1.5: A “hello, world” program in a JavaScript file.
hello.js  // using our favorite text editor, we’ll fill the file with the contents shown in Listing 1.5
 console.log("hello, world!");
 $ node hello.js // execute our program using the same node command
hello, world!

/*JS in a shell script*/
$ touch hello // creating a file called hello:
$ which node  // find the proper executable path for your system by running the which command:
/usr/local/bin/node
// Listing 1.7: A “hello, world” shell script.
hello
 #!/usr/local/bin/node

console.log("hello, world!");

$ chmod +x hell //make the file itself executable using the chmod (“change mode”) command combined with +x.
$ ./hello     // the file is already excutable and returns.
hello, world!



/* STRINGS*/
//strings can be thought of as sequences of characters in a particular order.
$ node
> "hello, world!"
'hello, world!'

> "It's not easy being green"
'It\'s not easy being green

> 'It\'s not easy being green'
'It\'s not easy being green'
> 'It's not easy being green'
'It's not easy being green'
    ^
SyntaxError: Unexpected identifier /*  JavaScript sees a bare letter s after the string 'It'
// Since there’s no identifier called s, the REPL raises an error

/* Concatenation and interpolation */
$ node
> "foo" + "bar";    // String concatenation
'foobar'

> let firstName = "Michael"; /* Using let to assign variables. */
> let lastName  = "Hartl";
> firstName
'Michael'

Listing 2.2: Concatenating string variables (and a string literal).
> firstName + " " + lastName;
'Michael Hartl'

Listing 2.3: Using the slightly outdated var to assign variables.
var firstName = "Michael";
var lastName  = "Hartl";

// The backtick syntax: Another way to build up strings is via interpolation using a special ES6 backtick syntax
// known as template literals:
> `${firstName} is my first name.` // Here we have a string enclosed in backticks
'Michael is my first name.'

// Listing 2.4: Concatenation review, then interpolating with backticks.
> firstName + " " + lastName;    // Concatenation, with a space in between
'Michael Hartl'
> `${firstName} ${lastName}`;    // The equivalent interpolation
'Michael Hartl'

/* PRINTING */
> console.log("hello, world!");     // This is JavaScript way to print a string to the screen is to use the console.log function:
hello, world!    // it  operates as a side effect, which refers to anything a function does other than returning
//a value.
// console.log() prints out the string to the screen and then returns nothing hence some console display undefined.

/* Properties, booleans, and control flow */
//since Almost everything in JavaScript, including strings, is an object, we can get useful
//information about strings and do useful things with them using the dot notation.
$ node
> "badger".length;    // Accessing the "length" property/attribute of a string. length is the property of String.
6
> "".length           // The empty string has zero length.
0
> firstName.length;  // Accessing the length of a variable.
7

//The length property is especially useful in comparisons, such as checking the length of a
//string to see how it compares to a particular value.
> "badger".length > 3;
true
> "badger".length > 6;
false
> "badger".length >= 6;
true
> "badger".length < 10;
true
> "badger".length === 6; //Be cautious while Using == as it's a bug in JavaScript in comparisons.
true

/*Listing 2.6: Control flow with if.*/
> let password = "foo";
> if (password.length < 6) {
    "Password is too short.";
  }
'Password is too short.'

/*Listing 2.7: Control flow with if and else.*/
> password = "foobar"; // notice we can declare and initialize a variable directly.
> if (password.length < 6) {
    "Password is too short.";
  } else {
    "Password is long enough.";
  }
'Password is long enough.'

/* Combining and inverting booleans */
// Booleans can be combined or inverted using the && (“and”), || (“or”), and ! (“bang” or “not”) operators.

/*Listing 2.8: The truth table for && (“and”).*/
> true && true
true
> false && true
false
> true && false
false
> false && false
false

/*Listing 2.9: Using the && operator in a conditional.*/
> let x = "foo";
> let y = "";
> if (x.length === 0 && y.length === 0) {
    "Both strings are empty!";
  } else {
    "At least one of the strings is nonempty.";
  }
'At least one of the strings is nonempty.'

/*Listing 2.10: The truth table for || (“or”).*/
> true || true
true
> true || false
true
> false || true
true
> false || false
false

/*Listing 2.11: Using the || operator in a conditional.*/
> if (x.length === 0 || y.length === 0) {
    "At least one of the strings is empty!";
  } else {
    "Neither of the strings is empty.";
  }
'At least one of the strings is empty!'

/*Listing 2.12: The truth table for !. It turns true to false and false to true*/
> !true
false
> !false
true

/*Listing 2.13: Using the ! operator in a conditional.*/
> if (!(x.length === 0)) {
  "x is not empty.";
} else {
  "x is empty.";
}
'x is not empty.'

> x.length === 0;
false

> (!(x.length === 0));
true

> (x.length !== 0); // !==(not equals) works the same.
true

/* Bang bang */
// Not all booleans are the result of comparisons
// every JavaScript object has a value of either true or false in a boolean context.
> !x
false // !!x = true
> !y
true // empty string is false in a boolean context. i.e !!y = false.

/*Listing 2.14: Using a conditional to force a boolean context.*/
> if (!x && !y) {
    "Both strings are empty!";
  } else {
    "At least one of the strings is nonempty.";
  }
'At least one of the strings is nonempty.'

> x && y
""  // Hint: When applying !! to a compound expression, wrap the whole thing in parentheses.

> !!(x && y)
false

/* METHODS */
//Though JavaScript strings have only one property (.length) the respond to a variety of methods.
//  A method has to be called with arguments, even if there aren’t any.
// example
$ node
> "HONEY BADGER".toLowerCase(); // converts the string to all lower-case letters and takes zero arguments.
honey badger

// it's useful when standardizing on lower-case letters in an email address.
> let username = firstName.toLowerCase();
> `${username}@example.com`
'michael@example.com'

> lastName.toUpperCase();
'HARTL'

/*Listing 2.15: Includes or does not include? That is the question.*/
> let soliloquy = "To be, or not to be, that is the question:";
> soliloquy.includes("To be");        // Does it include the substring "To be"?
true
> soliloquy.includes("question");     // What about "question"?
true
> soliloquy.includes("nonexistent");  // This string doesn't appear.
false
> soliloquy.includes("TO BE");        // String inclusion is case-sensitive.
false
> soliloquy.includes("To be", 1);     // does "To be" appear in soliloquy twice since counting in JavaScript starts from 0 not 1.
false
> soliloquy.includes("o be", 1);     // "o be" appears twice.
true

/*String iteration*/
// The practice of repeatedly stepping through an object one element at a time.
//Listing 2.16: Investigating the behavior of charAt.
> console.log(soliloquy);   // Just a reminder of what the string is
To be, or not to be, that is the question:
> soliloquy.charAt(0); // charAt() returns the character at that given index. eg at o due to the zero offset
'T'                     //  it returns the 1st character T.
> soliloquy.charAt(1);
'o'
> soliloquy.charAt(2);
' '

//Listing 2.17: A simple for loop.
> for (let i = 0; i < 5; i++) {
  console.log(i);
}
0
1
2
3
4

//Listing 2.18: Combining charAt and a for loop.
> for (let i = 0; i < soliloquy.length; i++) {
  console.log(soliloquy.charAt(i));
}
T
o

b
e
.
.
.
t
i
o
n
:

// we can also use soliloquy[] in place of soliloquy.charAt().
> for (let i = 0; i < soliloquy.length; i++) {
  console.log(soliloquy[i]);
}
T
o

b
e
.
.
.
t
i
o
n
:

/* ARRAYS */
array data type, is the general JavaScript container for arbitrary elements in a particular order.

/* SPLITTING */
// split is a natural way to get from strings to arrays.
> "ant cat bat".split(""); // split the string on the empty string.
[ 'a', 'n', 't', ' ', 'c', 'a', 't', ' ', 'b', 'a', 't' ]
> "ant bat cat".split(" ");     // Split a string into a three-element array on space .
[ 'ant', 'bat', 'cat' ]
> "ant,bat,cat".split(",");   // split the string on the comma.
[ 'ant', 'bat', 'cat' ]
> "ant, bat, cat".split(", "); // split the string on the comma.
[ 'ant', 'bat', 'cat' ]
> "ant, bat, cat".split(", "); // split the string on the space.
[ 'ant,', 'bat,', 'cat' ]
> "antheybatheycat".split("hey"); // split the string on hey.
[ 'ant', 'bat', 'cat' ]

//declaring an array. arrays can contain all kinds of elements:
> a = ["badger", 42, soliloquy.includes("To be")];
[ 'badger', 42, true ]
> a[2];
true
> a[3];
undefined

/* ARRAY SLICING*/
array slicing allows for accessing multiple elements at a time.
> a = [42, 8, 17, 99];
[ 42, 8, 17, 99 ]

> a.slice(1); // slicing an array with one element returns all the
[ 8, 17, 99 ]  // elements in the array from that index on to create another array.

> a.slice(1, 3);  // slicing from one index to another:
[ 8, 17 ]

> a.length;
4
> a[a.length-1]; // slicing helps to access the last element of an array. returns an array of one element.
[ 99 ]

> a.slice(-1); // to use slice with a negative number, which counts from the end:
Array [ 99 ]

> a.slice(-2); // returns all elements from the end to that slice.
Array [ 17, 99 ]

// to select an element itself from an array use []
> a[1];
8
> a.slice(-2)[0];
17
> a.slice(1);
Array [ 8, 17, 99 ]
> a.slice(1)[0];
8
// .slice() can be used also on strings.
 > soliloquy = "To be, or not to be, that is the question:";
 "To be, or not to be, that is the question:"
 > soliloquy.slice(3);
 "b"
 > soliloquy.slice(0, 3);
 "To"

 > a;
[ 42, 8, 17, 99 ]
> a.includes(42);       // Test for element inclusion using .includes().
true
> a.includes("foo");
false

> a.sort();
[ 17, 42, 8, 99 ]
> a;                    // `a` has changed as the result of `sort()`. avaScript has sorted the elements;
[ 17, 42, 8, 99 ]      // of the array not according to their numerical values, but rather “alphabetically”.
                  //  17 comes before 8 because 1 comes before 8 in the ordering scheme (ASCII) used by computers.

> a.reverse();
[ 99, 8, 42, 17 ]
> a;                    // Like `sort()`, `reverse()` mutates the array.
[ 99, 8, 42, 17 ]

/* PUSHING and POPPING*/
// push lets us append an element to the end of an array, while pop removes it:
> a.push(6);                   // Pushing onto an array (returns new length)
5
> a;
[ 99, 8, 42, 17, 6 ]
> a.push("foo");
6
> a;
[ 99, 8, 42, 17, 6, 'foo' ]
> a.pop();                    // `pop` returns the value itself (while removing it as a side-effect).
'foo'
> a.pop();
6
> a;
[ 99, 8, 42, 17 ]

/* SHIFT and UNSHIFT*/
// unshift to add an element at the front and returns the new length.
> a.unshift(10);
5;
> a.shift(); // shift from the front of an Array and returns the element dropped.
10

/* Undoing Split*/
//Listing 3.2: Different ways to join.
> a = ["ant", "bat", "cat", 42];
[ 'ant', 'bat', 'cat', 42 ]
> a.join();                       // Join on default (comma).
'ant,bat,cat,42'
> a.join(", ");                   // Join on comma-space.
'ant, bat, cat, 42'
> a.join(" -- ");                 // Join on double dashes.
'ant -- bat -- cat -- 42'
> a.join("");                     // Join on empty space.
'antbatcat42'
// NB: 42, which is an integer, is automatically converted to a string in the join.
// The split and join methods are almost inverse operations, but not quite.
> a
Array [ "ant", "bat", "cat" ]
> a.join(" ").split(" ");
Array [ "ant", "bat", "cat" ]
> a.join(",").split(",");
Array [ "ant", "bat", "cat" ]
> a.join(", ").split(", ");
Array [ "ant", "bat", "cat" ]
// but for
> a.join("").split("");
Array [ "a", "n", "t", "b", "a", "t", "c", "a", "t" ] // Since
> a.join("");
"antbatcat"

/* ARRAY ITERACTION*/
> for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
ant
bat
cat

/* MATH to STRING*/
> Math.PI
3.141592653589793
> Math.sqrt(3)
1.7320508075688772
> let tau = 2 * Math.PI;
> tau.toString();  // the most common way to convert from a number to a string is using the toString() method,
'6.283185307179586'

> 100.toString();
100.toString();   // The toString() method won’t work on a bare integer:
^^^^

SyntaxError: Invalid or unexpected token
> String(100.0); // instead you can use String() fxn that accepts also defined variables.
'100.0'
> String(tau);
'6.283185307179586'

> Number("6.283185307179586"); // Number() converts number/float as JS has no integers to a string
6.283185307179586
> String(Number("6.283185307179586"));
'6.283185307179586'
> Number('1.24e6')
1240000

/* DATES */
// first lets learn abt new, function, a so-called constructor function that is the standard JavaScript
// way to create a new object. we can use it to creat a String and even an Array.
> let s = new String("A man, a plan, a canal—Panama!"); // create a String s.
> s;
[String: 'A man, a plan, a canal—Panama!']
> s.split(", ");
[ 'A man', 'a plan', 'a canal—Panama!' ]

// create an Array.
> let a = new Array();
> a.push(3);
1
> a.push(4);
2
> a.push("hello, world!");
3
> a;
[ 3, 4, 'hello, world!' ]
> a.pop();
'hello, world!'

// create a Date.
> let now = new Date();
> now;
2018-03-01T05:01:47.136Z
> let moonLanding = new Date("July 20, 1969 20:18");
> now - moonLanding;
1534038227136 // The result here is the number of milliseconds since the day and time of the first Moon landing.

> now.getYear();        // Gives a weird answer
118
> now.getFullYear();    // This is what we want instead.
2018
> now.getMonth(); // month and day are returned as indices, and like everything in JavaScript they are zero-offset.
1
> now.getDay(); // hence January is 0 and February is 1. Sunday is the 1st day so Sunday is indexed 0.
3
// to get the name of the day by making an array of strings for the days of the week, and then using getDay() as an
// index in the array with the square bracket notation
> const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
// const is short for “constant”, indicates that the value of the variable won’t change. used in place of let.
> daysOfTheWeek[now.getDay()];
'Wednesday'

/* REGULAR expression*/
// also known as regexes or regexps a powerful mini-language for matching patterns in text.
// A basic regex consists of a sequence of characters that matches a particular pattern.
// We can create a new regex using the new function on the RegExp object.
> let zipCode = new RegExp("\\d{5}"); // a regex that matches standard American ZIP codes consisting of five digits
// in a row.
// \d represents any digit (0–9), and the first backslash is needed to escape the second backslash to get a literal
// backslash  in the string.
// to tell if a string matches a regex. Regular expressions come with an exec method that “executes” the regex on a
// string:
> let result = zipCode.exec("Beverly Hills 90210");
> result;
[ '90210', index: 14, input: 'Beverly Hills 90210' ]
// The result here includes the matching string, the index number where the match starts, and the original input.
> result.length
1

> zipCode = /\d{5}/;  // to create regexes using literal constructor syntax, namely, patterns inside of forward slashes:
/\d{5}/
> let s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles.";
s += " 91125 is another ZIP code in the Los Angeles area.";
> s = "Beverly Hills 90210 was a '90s TV show set in Los Angeles. 91125 is another ZIP code in the Los Angeles area."
> s.match(zipCode); // To find out whether the string matches the regex, we can use the string match() method:
Array [ "90210" ]

> !!s.match(zipCode);
true
// since match() method is condtional, we can do:
> if (s.match(zipCode)) {
    "Looks like there's at least one ZIP code in the string!";
  }
'Looks like there's at least one ZIP code in the string!'

> zipCode = /\d{5}/g;    // Use 'g' to set the 'global' flag.
/\d{5}/g

> s.match(zipCode);
[ '90210', '91125' ]

> zipCode = /(\d{5})-(\d{4})/g;
> p = "call the number 10118-0110"
> p.match(zipCode);
Array [ "10118-0110" ]

// regexps are also usefull with split().
> "ant bat cat duck".split(" ");
[ 'ant', 'bat', 'cat', 'duck' ]
> "ant bat cat duck".split(/\s+/); // regex for whitespace is \s, and the way to indicate “one or more” is the plus sign +
[ 'ant', 'bat', 'cat', 'duck' ]
> "ant    bat\tcat\nduck".split(/\s+/);
[ 'ant', 'bat', 'cat', 'duck' ] // power of regexes whitespace \s.

/* Plain Objects*/
// object refers to the abstract idea of a collection of data (properties) and functions (methods).
// plain objects work like hashes (also called associative arrays) in other languages.
// they are like regular arrays but with strings rather than integers as indices.
// Each element is thus a pair of values: a string (the key) and an element of any type (the value).
// let’s create an object to store the first and last names of a user.
> let user = {};                    // {} is an empty Object.
{}
> user["firstName"] = "Michael";    // Key "firstName", value "Michael"
'Michael'
> user["lastName"] = "Hartl";       // Key "lastName", value "Hartl"
'Hartl'
> user
Object { firstName: "Michael", secondName: "Hartl" }
> user["firstName"];      // Element access is like arrays but the with strings as indices.
'Michael'
> user["lastName"];
'Hartl'
// The keys in our object are nothing other than the properties hence can be accessed using the dot notation.
> user.firstName;        // Element access using the dot notation
'Michael'
> user.lastName;
'Hartl'

/* FUNCTIONS */
//function calls in JavaScript consist of a name and zero or more arguments enclosed in parentheses:
//functions attached to objects (such as log attached to console) are also called methods.
> console.log("hello, world!");
hello, world!

> function stringMessage(string) {
    if (string) {
      return "The string is nonempty."; // use of return to indicate the return value of the function.
    } else {
      return "It's an empty string!";
    }
  }
undefined
