// Recursion is a powerful programming technique where a function calls itself to solve smaller subproblems of a larger problem. Below are common use cases for recursion, along with examples.

// 1. Mathematical Computations
// Recursion is often used for solving mathematical problems that can be broken down into smaller subproblems.
// Example: Factorial Calculation


function factorial(n) {
  if (n === 0) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120

// 2. Fibonacci Sequence
// Recursion can compute Fibonacci numbers by expressing them in terms of smaller Fibonacci values.



function fibonacci(n) {
  if (n <= 1) return n; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}
console.log(fibonacci(6)); // Output: 8
// 3. Traversing Data Structures
// Recursive algorithms are widely used to traverse tree-like or graph-based data structures.

// Example: Binary Tree Traversal


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node === null) return;
  inOrderTraversal(node.left);
  console.log(node.value); // Process the node
  inOrderTraversal(node.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
inOrderTraversal(root); // Output: 2, 1, 3
// 4. Sorting Algorithms
// Recursive approaches are integral to sorting algorithms like QuickSort and MergeSort.

// Example: MergeSort


function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid)); // Recursive case
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right);
}

console.log(mergeSort([5, 3, 8, 6, 2])); // Output: [2, 3, 5, 6, 8]
// 5. Backtracking
// Recursion is fundamental in backtracking algorithms like solving mazes, N-Queens, and Sudoku.

// Example: N-Queens Problem


function solveNQueens(n, row = 0, board = [], results = []) {
  if (row === n) {
    results.push([...board]);
    return;
  }
  for (let col = 0; col < n; col++) {
    if (isSafe(row, col, board)) {
      board.push(col);
      solveNQueens(n, row + 1, board, results);
      board.pop();
    }
  }
  return results;
}

function isSafe(row, col, board) {
  for (let r = 0; r < row; r++) {
    const c = board[r];
    if (c === col || c - r === col - row || c + r === col + row) return false;
  }
  return true;
}

console.log(solveNQueens(4)); // Output: Array of valid solutions
// 6. String Manipulation
// Recursion can handle string problems like reversing, permutations, or subsequences.

// Example: Reverse a String


function reverseString(str) {
  if (str.length === 0) return ""; // Base case
  return reverseString(str.slice(1)) + str[0]; // Recursive case
}
console.log(reverseString("hello")); // Output: "olleh"
// 7. Generating Combinations and Permutations
// Recursive algorithms can generate all possible combinations or permutations of a given set.

// Example: Generate Permutations


function generatePermutations(str, prefix = "") {
  if (str.length === 0) console.log(prefix); // Base case
  for (let i = 0; i < str.length; i++) {
    generatePermutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
  }
}
generatePermutations("abc");
// Output: "abc", "acb", "bac", "bca", "cab", "cba"


// 8. Dynamic Programming Problems
// Recursion is used in dynamic programming for problems like the Knapsack Problem, Longest Common Subsequence, etc.
// Example: Longest Common Subsequence


function lcs(str1, str2, m = str1.length, n = str2.length) {
  if (m === 0 || n === 0) return 0; // Base case
  if (str1[m - 1] === str2[n - 1]) {
    return 1 + lcs(str1, str2, m - 1, n - 1); // Recursive case
  }
  return Math.max(lcs(str1, str2, m - 1, n), lcs(str1, str2, m, n - 1));
}
console.log(lcs("abcde", "ace")); // Output: 3

// 9. Parsing Expressions
// Recursion is helpful for parsing nested expressions, such as evaluating mathematical expressions or parsing JSON.

// 10. Divide and Conquer
// Algorithms like binary search and quickselect use recursion for efficient searching and selection.

// Example: Binary Search


function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1; // Base case
  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Output: 2

// 11. Tower of Hanoi
// A classic problem to move disks from one rod to another.



function towerOfHanoi(n, from, to, aux) {
  if (n === 0) return;
  towerOfHanoi(n - 1, from, aux, to);
  console.log(`Move disk ${n} from ${from} to ${to}`);
  towerOfHanoi(n - 1, aux, to, from);
}
towerOfHanoi(3, "A", "C", "B");
// Output: Steps to solve Tower of Hanoi for 3 disks

// Benefits of Recursion------------------------------
// Elegant and concise code for problems with repetitive subproblems.
// Natural fit for problems with hierarchical or nested structures.
// Drawbacks
// Higher memory usage due to call stack.
// Risk of stack overflow if base cases are not defined or recursion depth is too large