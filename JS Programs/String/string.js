let myName = "Aditya";
let myAge = "20";

console.log("My name is "+myName+" and age is "+myAge);    // Old School Method 
console.log(`My name is ${myName} and age is ${myAge}`);  // Recomonded Method 


const inGameName = new String("VecToR"); // this method used to represent the string. 
//The representation is in form: String {'Aditya'} 0:"A",1:"d" ,2:"i" ,3: "t",4:"y" , 5 :"a" length:6
// where 0 is key and A is its value, so it is stored in key value pair.

console.log(inGameName[2]); // acceseing the value of Key 2 .
console.log(inGameName.__proto__); // acceseing the object .
console.log(inGameName.length); // no. of character in the string.
console.log(inGameName.toUpperCase()); // Converts all the alphabetic characters in a string to uppercase.
console.log(inGameName.charAt(2)); // The zero-based index of the desired character.
// Returns the character at the specified index.
console.log(inGameName.toLowerCase()); // Converts all the alphabetic characters in a string to lowercase.
console.log(inGameName.charAt(3));
console.log(inGameName.indexOf("T")); // The substring to search for in the string
// Returns the position of the first occurrence of a substring.
console.log(inGameName.slice(0,3)); // The index to the beginning of the specified portion of stringObj.
// Returns a section of a string. Slice can be start from end of the string by -ve value.
console.log(inGameName.substring(0,3));// The index to the beginning of the specified portion of stringObj.
// Returns a section of a string.
const msg = "            Hello World       ";
console.log(msg.trim()); // Removes the leading and trailing white space and line terminator characters from a string.
console.log(msg.trimEnd()); // Removes the leading and trailing white space and line terminator characters from end of string.
console.log(msg.trimStart()); // Removes the leading and trailing white space and line terminator characters from Start of string.
console.log(msg.trimLeft()); // Removes the leading and trailing white space and line terminator characters from Left of string.
console.log(msg.trimRight()); // Removes the leading and trailing white space and line terminator characters from Right of string.

let url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd";

console.log(url.replace('trimEnd',"")); // replace fun replace the string from first argument to second argument
console.log(url.includes("developers")) // search string Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.



