## intro to **arrays**

```js
const arrayName = [1,2,3,4,5,6,7,8,9,10];
let arrayName =   ["Apple", "Banana", "Orange"];
```
  ### 15 main methods that are commonly used : 

| No.|methods | used |
|----|----|----|
|1|push()|add one or more elements to the end of an|
|2|pop()|removes the last element from an array and returns that element|
|3|shift()| remove the first element from an array and return that removed element|
|4|unshift()| add one or more elements to the beginning of an array and returns the new length of the array|
|5|splice()|change the contents of an array by removing, replacing, or adding elements at a specific position in an array|
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
// add one or more elements to the end

let fruits = ["Apple", "Banana"];
let newLength = fruits.push("Mango", "Orange");

console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]
console.log(newLength); // Output: 4

```
###### 2. pop() 
```js
// removes the last element from an array and returns that element

let fruits = ["Apple", "Banana", "Mango"];
let lastFruit = fruits.pop();

console.log(lastFruit); // Output: "Mango"
console.log(fruits); // Output: ["Apple", "Banana"]

```
###### 3. shift()
```js
// remove the first element from an array and return that removed element

let fruits = ["Apple", "Banana", "Mango"];
let firstFruit = fruits.shift();

console.log(firstFruit); // Output: "Apple"
console.log(fruits); // Output: ["Banana", "Mango"]

```
###### 4. unshift()
```js
// add one or more elements to the beginning of an array and returns the new length of the array

let fruits = ["Banana", "Mango"];
let newLength = fruits.unshift("Apple", "Orange");

console.log(fruits); // Output: ["Apple", "Orange", "Banana", "Mango"]
console.log(newLength); // Output: 4

```
###### 5. splice()
```js
// change the contents of an array by removing, replacing, or adding elements at a specific position in an array

array.splice(start, deleteCount, item1, ..., itemN)

    start: The index at which to start changing the array.

    deleteCount: The number of elements to remove from start.

    item1, ..., itemN: The elements to add to the array, starting at the index start

Removing elements:

let fruits = ["Apple", "Banana", "Mango", "Orange"];
let removedFruits = fruits.splice(1, 2); // Start at index 1, remove 2 elements

console.log(fruits); // Output: ["Apple", "Orange"]
console.log(removedFruits); // Output: ["Banana", "Mango"]

Adding elements:

let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(2, 0, "Mango", "Pineapple"); // Start at index 2, delete 0 elements, add "Mango" and "Pineapple"

console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Pineapple", "Orange"]

Replacing elements:

let fruits = ["Apple", "Banana", "Mango", "Orange"];
fruits.splice(2, 1, "Grapes"); // Start at index 2, remove 1 element, add "Grapes"

console.log(fruits); // Output: ["Apple", "Banana", "Grapes", "Orange"]


```