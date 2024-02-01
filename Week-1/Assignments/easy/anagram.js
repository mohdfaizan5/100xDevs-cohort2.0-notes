/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sort(string){

let arrange = string.split('').sort().join('')
return arrange
}


function isAnagram(str1, str2) {
  if(sort(str1.toLowerCase()) === sort(str2.toLowerCase())){
    return true
  }
  else{
    return false
  }
}

let result = isAnagram('hello', 'hello!')
console.log(result)

