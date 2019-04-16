// Reverses a string.
function reverse(string) {
  return string.split("").reverse().join("");
}

//Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase(); // converts the string to lowerCase first.
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  /*Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }*/

  // returns a quiter (lower-caps) version of the content.
   this.quite = function quite () {
     return this.content.toLowerCase();
   }
   // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.quite(this.content);
  }
   // Returns true if the phrase is a palindrome, false otherwise.
   this.palindrome = function palindrome() {
     return this.processedContent() === reverse(this.processedContent());
   }
   // returns a LOUDER (all-caps) version of the content.
  this.louder = function louder () {
    return this.content.toUpperCase();

  }
}
/* PROTOTYPE */
// JavaScript is often described as a prototype-based language, each object has a prototype object.
// prototype objects  acts as a template object that it inherits methods and properties from.
// prototype chain is when an object’s prototype object may also have a prototype object.
// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  /* Overriding this.processedContent method in Phrase.
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }*/
}
TranslatedPhrase.prototype = new Phrase();
