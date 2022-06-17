"use strict";
const isPalindrome = function (word) {
  // start from the beginning
  for (let i = 0; i < word.length / 2; i++) {
    // check each letter to the correponding letter from the end
    const checker = word.length - 1 - i;
    //  return false if the words do not match
    if (word[i] !== word[checker]) return false;
  }

  // return true
  return true;
};
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
