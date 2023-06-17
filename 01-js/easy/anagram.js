/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  var count1 = new Array(26).fill(0);
  var count2 = new Array(26).fill(0);

  for(var i = 0; i < str1.length; i++) { 
    count1[str1.toLowerCase().charCodeAt(i) - 'a'.charCodeAt()]++;
    count2[str2.toLowerCase().charCodeAt(i) - 'a'.charCodeAt()]++;
  }

  for(var i = 0; i < count1.length; i++) {
    if(count1[i] !== count2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
