// 1. Find the Maximum and Minimum Element--------------------------------------------------------------------------------
function findMinMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(findMinMax([3, 5, 1, 8, -2]));   // Output: { max: 8, min: -2 }

//without Inbuilt method
function findMaxFor(arr) {
let max = -Infinity;
let min = Infinity;
for (let num of arr) {
  if (num > max) {
    max = num;
  } else if (num < min) {
    min = num;
  }
}
return {min,max};
}
console.log(findMaxFor([3, 5, 1, 8, -2])); // Output: { max: 8, min: -2 }

// 2. Find the Second Largest Element---------------------------------------------------------------------
const findKthMax = (arr, k) => {
  return [...new Set(arr)].sort((a, b) => b - a)[k - 1];
};
console.log("kth max", findKthMax([3, 44, 44, 14, 14, 3, 2], 2)); // Output:

function secondHighestNum(arr) {
let first = -Infinity;
let second = -Infinity;
for (let num of arr) {
  if (num === first || num === second) continue;
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second) {
    second = num;
  }
}
return {first, second};
}
console.log(secondHighestNum([1, 2, 3, 4, 22, , 42, , 42, 23]));


// 3. Reverse an Array--------------------------------------------------------------------------------------
function reverseArray(arr) {
return arr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

// 4. Check if Array is Sorted-------------------------------------------------------------------------------
const isArraySortedAscending = (arr) => {
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    return false; // If any element is greater than the next one, it's not sorted
  }
}
return true; // If no such case was found, the array is sorted
};
console.log(isArraySortedAscending([1, 2, 3, 4, 5])); // true

// 5. Move All Zeros to End----------------------------------------------------------------------------------
function moveZerosToEnd(arr) {
let nonZero = arr.filter((num) => num !== 0);
let zeros = arr.filter((num) => num === 0);
return [...nonZero, ...zeros];
}
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]

function moveZeroes(nums) {
let i = 0; 
for (let j = 0; j < nums.length; j++) {
  if (nums[j] !== 0) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
  }
}
return nums
}
console.log(moveZeroes([0, 1, 0, 3, 12]));

// 6. Remove Duplicates from Sorted Array------------------------------------------------------------------------
function removeDuplicates(arr) {
return [...new Set(arr)];
}
console.log(removeDuplicates([1, 1, 2, 2, 3])); // Output: [1, 2, 3]

function removeDuplicatesReduce(arr) {
return arr.reduce((acc, curr) => {
  return acc.includes(curr) ? acc : [...acc, curr];
}, []);
}
console.log(removeDuplicatesReduce([1, 1, 2, 2, 3])); // Output: [1, 2, 3]

// 7. Find Duplicates in an Array-------------------------------------------------------------------------------------
function findDuplicates(arr) {
let obj = {};
let duplicates = [];
for (let val of arr) {
  obj[val] = (obj[val] || 0) + 1;
}
for(let num in obj){
     if (num > 1) duplicates.push(num);
}
return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 3])); // Output: [2, 3]

// 7. Rotate Array by K Positions--------------------------------------------------------------------------------
function rotateArray(arr, k) {
k %= arr.length;
return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

// 8. Find the Intersection of Two Arrays-------------------------------------------------------------------------
function intersection(arr1, arr2) {
return arr1.filter((num) => arr2.includes(num));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 9. Find the Union of Two Arrays---------------------------------------------------------------------------------
function union(arr1, arr2) {
return [...new Set([...arr1, ...arr2])];
}
console.log(union([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// 10. Find the Missing Number------------------------------------------------------------------------------------
function findMissingNumber(arr, n) {
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr.reduce((acc, num) => acc + num, 0);
return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Output: 3

// 12. Find the Pair with a Given Sum-----------------------------------------------------------------------------------
function findPairBruteForce(arr, target) {
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      return [i, j];
    }
  }
}
return null;
}
console.log(findPairBruteForce([2, 7, 11, 15], 9)); // Output: [0, 1]

//13  Count frequency of array element-----------------------------------------------------------------------------------
function countFrequency(arr) {
const obj = {};
for (let num of arr) {
  obj[num] = (obj[num] || 0) + 1;
}
return obj;
}
console.log(countFrequency([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}


// 14. Flatten Nested Arrays to a Single Level (Using Recursion)----------------------------------------------------------
function flattenArray(arr) {
return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
}, []);
}
const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]


//15 sort the array acceding order  for alredy swap array--------------------------------------------------------------------------
function sortArray(arr) {
let swapped;
for (let i = 0; i < arr.length; i++) {
  swapped = false; // Reset the swapped flag for this pass
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
      swapped = true; 
    }
  }
  if (!swapped) break; // If no swaps happened, the array is sorted
}
return arr;
}
console.log(sortArray([4, 2, 3, 1])); // Output: "Ascending"



//16 check array sorted both acending or dedscending ------------------------------------------------------------------------------------ 
function checkArrayOrder(arr) {
let isAscending = true;
let isDescending = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isAscending = false; // Not sorted in ascending order
  }
  if (arr[i] < arr[i + 1]) {
    isDescending = false; // Not sorted in descending order
  }
}
if (isAscending) return "Ascending";
if (isDescending) return "Descending";
return "Not sorted";
}
console.log(checkArrayOrder([1, 2, 3, 4, 5])); // Output: "Ascending"

// 5 Find the Majority Element -----------------------------
function findMajorityElement(nums) {
let counts = {};
let majorityCount = Math.floor(nums.length / 2);

// Count occurrences of each element
for (let num of nums) {
  counts[num] = (counts[num] || 0) + 1;

  // Check if this element is the majority element
  if (counts[num] >= majorityCount) {
    return num;
  }
}

return null; // No majority element exists
}
let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(findMajorityElement(nums)); // Output: 2


// Rearrange Array Based on Index Mapping.  Problem: Rearrange an array so that arr[i] goes to index[i].
// Example: Input: [50, 40, 70, 60, 90], index = [3, 0, 4, 1, 2], Output: [40, 60, 90, 50, 70]
function rearrangeArray(arr, index) {
let result = new Array(arr.length);       // Create a new array with the same length as arr
for (let i = 0; i < arr.length; i++) {
    result[index[i]] = arr[i];
}
return result;
}
console.log( rearrangeArray([50, 40, 70, 60, 90], [3, 0, 4, 1, 2])); // Output: [40, 60, 90, 50, 70]







//Otp generate 
function generateAlphanumericOTP(length = 6) {
const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let otp = '';
for (let i = 0; i < length; i++) {
    otp += chars[Math.floor(Math.random() * chars.length)];
}
return otp;
}
console.log(generateAlphanumericOTP())

function generateOTP(length = 6) {
let otp = '';
for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10); // Generate a random digit (0-9)
}
return otp;
}

// Example usage
const otp = generateOTP();
console.log("Generated OTP:", otp);


const generateOTP2 = (length = 6) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
// Example usage
const otp2 = generateOTP2();
console.log("Generated OTP:", otp2);