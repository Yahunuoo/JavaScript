## intro to **arrays**

```js
const arrayName = [1,2,3,4,5,6,7,8,9,10];
let arrayName = [1,2,3,4,5,6,7,8,9,10];
```
  ### 15 main methods that are commonly used : 

| No.|methods | used |
|----|----|----|
|1| push()|Adds an element to the end of an array|
|2|pop()|Removes the last element from an array|
|3|shift()| Removes the first element from an array|
|4|unshift()|Adds an element to the beginning of an array|
|5|splice()|Adds or removes elements at a specific position in an array|
|6|slice()|Returns a shallow copy of a portion of an array|
|7|concat()|Joins two or more arrays|
|8|indexOf()|Returns the first index at which a given element can be found in the array|
|9|lastIndexOf()|Returns the last index at which a given element can be found in the array|
|10|forEach()|Executes a provided function once for each array element|
|11|map()|Creates a new array with the results of calling a provided function on every element in the calling array|
|12|filter()|Creates a new array with all elements that pass the test implemented by the provided function|
|13|sort()|Sorts the elements of an array in place and returns the array|
|14| reverse()|Reverses the order of the elements in an array|
|15|reduce()|Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value|


## Syntax

###### 1. push()
```js
// Creating an array
let fruits = ["Apple", "Banana", "Orange"];
// Adding elements to an array
fruits.push("Mango"); // Adds a new element (Mango) to the end of the array
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]
```
###### 2. pop()
```js
let fruits = ["Apple", "Banana", "Orange"];
fruits.pop(); //Removes the last element from the array
console.log(fruits); // Output: ["apple", "banana"]
```

