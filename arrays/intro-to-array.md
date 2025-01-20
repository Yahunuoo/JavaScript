# Core_Of_js_lab

Arrays  المصفوفات

The Beginning
array
    [];
    length | length -1 |
    push()
    pop()
    Updating
    == Level Up content == to by study
    at()
    unshift()
    shift()
    break
    continue
    Copy all of an array
    Copy some of an array
    Copy an array and insert additional elements
    Shallow vs. Deep Copy
loop
    for
    of
    == Level Up content == to by study
    break
    continue

forEach()

=================================================================================================================
*** arrays:

1- Think of arrays in JavaScript like a bookshelf full of books. Each book on the shelf is an element of the array.
Books placed on it have an order - there is a first and last book, and every book between has a specific location on the shelf.

2- Arrays can contain (zero) or (more items) called elements (not to be confused with HTML elements). These elements are stored in a specific order

3- Each element in an array can hold any data type - (strings), (numbers), (objects), (functions), or even (other arrays)

4- == note == :just because you can doesn't necessarily mean that you should - as we work with arrays, we will typically want them to contain a single type of data.

5- In JavaScript, arrays can grow and shrink in size dynamically. You can add to them without being concerned about their capacity.

6-  == contemplation == : Although it's common to refer to an array as its own data type, they are technically a subtype of the Object type. This means arrays are technically objects in JavaScript.

7- == note == :  An element in an array is an individual item stored at a (specific position) within an array.

8- Arrays are typically the data structure of choice for holding an ordered list of data

9- Why use arrays? 
example : Imagine you wanted to record the high temperature in your location every day for a year. Without arrays, you would need to create a separate variable for every new piece of data. Instead we can store all that temperature data in a single container because we have arrays.

Collecting that data in a single container has other benefits. Because all the high-temperature data you've collected is held in one place, it's easier to carry out operations on that data. For example, finding the average high temperature or even the hottest or coldest day of the year.

10 -  An array is a collection of elements stored in a specific order. Think of an array as a list or a container holding multiple values.

=========================================================
Creating arrays :
const nums = ['element0','element1','element2']
1- The const keyword. Arrays should be declared using const.
2- The name of the array should be plural.
3- Opening and closing (square brackets[]) indicate an array.
4- == note == The name of an array should always be plural because it holds a collection of items. The array above is named nums because it holds numbers inside of it
5- An array can hold any data inside of it (including other arrays!) and can even hold multiple data types.
6- add semicolon to array ;
=========================================================
Accessing elements at any position in an array : 

const movise = ['movie1','movie2','movie3'];
const firstmovie = movise [0];
Result : firstMovie is 'movie1'

1- Note that indexes are integers where 0 is used to access the first element. Each consecutive element has its index incremented by one.

2- An index is a numerical value that represents the position of an element within an array.

3- === Remember === ( that array indexes start from 0) for the first element. This "zero-based" indexing convention is used in programming to align with memory offset principles.

=========================================================
length property : 
1- The length property on an array can be used to quickly see how many elements an array contains. For example:

const movise = ['movie1','movie2','movie3'];
console.log(movise.length);
Result :3
===========
Using length to access the last element of an array [name.length value]
const movise = ['movie1','movie2','movie2'];
const lastmovie = movise [movise.length -1];
Result: movie2
1- === note === access the last element of an array thers no 0 index
============================================================
at() method

1- The at() method improves code readability, especially when executing complex array manipulations.

2- The at() method can directly access elements by their index

3-  It's not that different from square bracket notation at first glance, except it does accept negative indexes! This can be used to access the last item in an array easily:

const movies = ['movie1','movie2','movie3','movie4'];
const lastmovie = movies.at(-1);
Result: movie4
=============================================================
Updating existing elements in an array
1- Just like we access elements in an array using square bracket notation

const movies = ['movie1','movie2','movie3','movie4'];
const apdate = movies[1] = 'movies5';
Result:[ 'movie1', 'movie5', 'movie3', 'movie4' ];

==============================================================
Adding  elements at the of an array

push()
1- We can add one or more elements to the (end) of an array using the push() method:

const add = movise.push('movie6','movie7');
Result:[ 'movie1', 'movie5', 'movie3', 'movie4', 'movie6', 'movie7' ]

2- Imagine a stack of books on a table. The push() method is like adding a book or books to the top of the stack.

==============================================================
removing elements at the start

pop()
1- We can remove a single element from the end of an array using the pop() method:
2- pop() doesn’t take any arguments and returns the element that was removed from the array:


const removing = movise.pop();
Result:[ 'movie1', 'movie5', 'movie3', 'movie4', 'movie6' ]


=================================================================================================================================

*** foor loop
for = This is the keyword used to create a loop.

1-  Iteration is the process of repeatedly executing a set of instructions or looping through a collection of items (like an array or string) one by one until a specific condition is met or until no more items are left to process.

2- A standard for loop can iterate through an array. (Initialize the loop with idx set to 0) - the index of the first element. End iteration at the index of the last element:

3- === A standard for loop ===

for (let idx = 0; idx < movies.length; idx++) {
  console.log(movies[idx]);
}
Result:
movie1
movie2
movie3
movie4

4-=== imperative way === The traditional for statement can be used to iterate over an array in an imperative way - meaning we provide each step the computer should take to carry out an action. The for...of statement is a declarative approach that provides a more concise way to iterate over arrays (and other iterable structures like strings):

of for (let movie of movies){
    consol.log(movie)
}
Result:
movie1
movie2
movie3
movie4

5- Imperative programming requires instructions to carry out a task.
6- Declarative programming is a decree unconcerned with how the result happens, just that it does

=================================================================================================================================

*** forEach() Functions as arguments

1- The forEach() method is another declarative approach that provides a more readable way to iterate over all array elements. This method clearly communicates a developer's intention to process each item and perform an action on each.

2-== contemplation == Before we dive into forEach(), let's talk about a very cool feature of JavaScript. It treats functions as (first-class citizens), meaning they operate like any other piece of data so they can be used as arguments.

3- === Note === An anonymous function is a function without a name. Unlike named functions, you can't refer to anonymous functions later in your code, making them useful for one-time operations.
====================
4- This is the most basic syntax for using the forEach() method on the movies array:

movies.forEach(callbackfunction);

5 - The array that we will iterate through, in this case, movies.
6- The forEach() method. This method always returns undefined, no matter what code is inside the callback function.
7- The callback function is where we will write the function that will be executed for each item in the movies array.
=== note === A callback function is a function passed into another function as an argument.
=== note === It's recommended to name the first parameter (representing each item) as a singular form of the array's name. So, if your array is named movies, name the parameter movie
======================
movies.forEach((movie) => {
    console.log(movie)
  });

Remember this callback function runs for each item in the movies array. movie is an individual element in the movies array. So in the first iteration movie will be 'Barbie'. In the second, it will be 'Arrival', and so on.

This code will result in the following output:
movie1
movie2
movie3
movie4

In addition to the current element, forEach() also provides the index of the current element to the callback function:

movies.forEach((movie, index) => {
  if(index === 2) console.log("This is the third movie:");
  console.log(movie);
});

 result:
movie1
movie2
This is the third movie:
movie3
movie4

========================