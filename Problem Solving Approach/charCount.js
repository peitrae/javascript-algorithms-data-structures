// Problem
// Write a function which takes in a string and returns counts of each character in the string

// Examples
charCount("aaa"); // { a: 4 }
charCount("hello"); // { h:1, e:1, l:2, o:1 }
charCount("Javascript is awesome"); // { j:1, a:3, v:1, s:2, c:1, r:1, i:2, p:1, t:1, w:1, e:2, o:1, m:1 }

// Break it down
function charCount(str) {
  // make an empty object
  // loop over the string
  // if char is a number/letter AND is a key in object, add one to count
  // if char is a number/letter AND is not a key in object, add it to object and set value to 1
  // if char is something else, do nothing
  // return the object
}

// Solve
function charCount(str) {
  const result = {};

  for (let char of str) {
    char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  return result;
}

// Refactor

import isAlphaNumeric from "./isAlphaNumberic";

function charCount(str) {
  const result = {};

  for (let char of str) {
    char = char.toLowerCase();

    if (isAlphaNumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }

  return result;
}
