//
//
// ----------------------------------
// Method 1: (replace + split + reverse + join) + Regex = Text pattern-matching language

const isPalindrome = (str) => {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formattedStr.split("").reverse().join("");
  return formattedStr === reversedStr;
};

// ----------------------------------
// Method 2: (split + reverse + join)

const isPalindrome2 = (str) =>
  str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

// ------------------------
// REGEX:
// ------------------------
/*
__What is Regex?
A pattern-matching language for searching, validating, and manipulating text

__Basic Syntax in JavaScript:
/pattern/flags
// Example: /[a-z]+/gi

__Character Classes:
[abc] - Match a, b, or c
[^abc] - Match anything EXCEPT a, b, c
[a-z] - Match any lowercase letter
[0-9] - Match any digit

__Flags:
g - Global (all matches)
i - Case-insensitive

__mostly used JS methods:
replace
test
match

__JavaScript Regex Syntax: 
Write regex between / /  

__ ^ in regex in JS:
Inside [ ]: [^abc] = NOT a, b, or c (negation)
Outside [ ]: ^abc = START of string (anchor)


Universal regex rules:
^ = Start of string/line (outside [ ])
[^ ] = Negation (inside [ ])
$ = End of string/line

__Examples:
"Hello world".match(/^Hello/)   // ✓ Matches ("Hello" at start)
"World, hello".match(/^Hello/)  // ✗ No match (not at start)
"123abc".match(/^[0-9]/)        // ✓ Matches ("1" at start)

/^Hello/    // Matches "Hello" only at BEGINNING of string
/^[0-9]/    // Matches digit only at START
/^abc/gm    // With m flag: matches "abc" at start of EACH line

"hello".replace(/[aeiou]/g, "*")  // "h*ll*"
"123abc".match(/\d+/g)            // ["123"]
/\d+/.test("123")                 // true

/[abc]/      // Matches a OR b OR c (single character)
/[^abc]/     // Matches any single character NOT a,b,c
/[a-z0-9]/   // Matches any single letter a-z OR digit 0-9
/[a-z0-9]/g  // Means: "Find ALL individual characters that are letters a-z OR digits 0-9"

/[abc]/   // Matches SINGLE character: a, b, or c
/(abc)/   // Matches SEQUENCE of characters: "abc" exactly

/pattern/      // Basic regex
/pattern/g     // Global flag
/pattern/gi    // Global + case-insensitive
/pattern/gm    // Global + multiline

*/
