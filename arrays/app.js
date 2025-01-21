const arra1 = [1,2,3,4,5,6,7,8,9,10];
const arra2 = ['a','b','c','d','e','f','g','h','i','j'];

const max = arra1.concat(arra2);

console.log(max.includes('m')); // النتيجة: true
console.log(max.includes('b'));  // النتيجة: false

console.log(max);
console.log(max.join(', ')); // Join elements of max array with a comma and space

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [...array1, ...array2];

// console.log(combinedArray); // النتيجة: [1, 2, 3, 4, 5, 6]
// console.log(combinedArray.join(' - ')); // Join elements of combinedArray with a hyphen and space


