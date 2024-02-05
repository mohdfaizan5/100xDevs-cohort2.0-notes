/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function reverse(string){
  return string.split("").reverse().join("")
}

function isPalindrome(str) {
  let a = str.split(" ").join("").toLowerCase()
  let b = reverse(a)
  if(b == a){
    return true
  }
  else{
    return false
  }
}

let res = isPalindrome('A man a plan a canal Panama')

console.log(res)




