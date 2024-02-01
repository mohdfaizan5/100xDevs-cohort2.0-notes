/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/



function countVowels(string){
  let char = string.toLowerCase()
  let vowelcount =0
  for(let i=0;i<char.length;i++){
    if(char.charAt(i) == "a"||char.charAt(i) == "e"||char.charAt(i) == "i"||char.charAt(i) == "o"||char.charAt(i) == "u"){
      vowelcount = vowelcount + 1
    }
  }
  return vowelcount
}

let result = countVowels('QUIET')
console.log(result)