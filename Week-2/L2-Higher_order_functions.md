## Higher Order Functions

1. Map
2. Filter

### Arrow Functions

- It is another way of writing the functions.They provide a more concise syntax compared to traditional function expressions.

* Normal Function
```
function add(a,b){
return a+b
}
const sum =add(2,1)
console.log(sum)
```
* Arrow Function
```
 const add = (a,b)=>{
  return a+b
}
console.log(add(2,1))
```

> When we observe both normal and arrow function , the syntax of arrow function looks more simple and easy.
> In arrow function we don't use keyword 'function' instead of that we use a arrow
'=>'


### Map method( )

1. Lets imagine u have array of integer ,u need return a new array where every value is multiplied by 2

Method 1:

```
 const array1 = [1, 2, 3, 4, 5];
let newarray =[]
for (let i = 0; i < array1.length; i++) {
  let multByTwo = array1[i] * 2;
  newarray.push(multByTwo)
  
}
console.log(newarray)
```

By using Map

### Map method
* The map() method is a higher-order function in JavaScript that is used to apply a given function to all elements of an array and create a new array with the results. 
* It does not modify the original array instead, it returns a new array based on the results of applying the provided function to each element.

Method 1
```
let a =[1,2,3,4,5]
function mul(i){
return i*2
}
let ans = a.map(mul)
console.log(ans)
```

Method 2 (Normal function)

```
let a =[1,2,3,4,5]

let ans = a.map(function mul(i){
return i*2
})
console.log(ans)
```

Method 3 (arrow function)

```
let a =[1,2,3,4,5]

let ans = a.map((i)=>{
return i*2
})
console.log(ans)
```
* Exercise
1. Create a function that takes a array and callback function as agruments to perform the function just like map method

```
function map(arr,callback){
  let newarray =[];
  for(let i=0;i<arr.length;i++){
    newarray.push(callback(arr[i]))
  }
  return newarray
}

function mul(a) {
  return a*2
}

const res = map([1,2,3,3],mul)
console.log(res)
```   
### Filter method( )

1. Lets think we have given with the array of integer and our work is to return the new array with only even numbers in it.


Method 1
```
let array = [2, 3, 41, 46, 3, 7];
let newarray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    newarray.push(array[i]);
  }
}

console.log(newarray);
```

Method 2 (By using Filter method)

### Filter method( )
* The filter( ) method is another higher-order function in JavaScript, similar to map().
*  It is used to create a new array containing elements that pass a certain condition based on a provided function. 
* The filter( ) method does not modify the original array; instead, it returns a new array with the elements that meet the specified condition.

Method 1
```
let a =[1,2,32,5,33]

function even(n){
  if(n%2 == 0){
    return n
  }
}

const res = a.filter(even)
console.log(res)
```
Method 2 (arrow function)
```
let a =[1,2,32,5,33]

const res = a.filter((n)=>{
if(n%2 == 0){
return n
}
})
console.log(res)
```