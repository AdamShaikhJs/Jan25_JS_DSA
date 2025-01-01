// -----------------------------------------reduce method--------------------------------------------------------------
// 1. Summing Values in an Array
const numbers = [10, 20, 30];
const sum = numbers.reduce((acc, num) => acc + num, 0); // Output: 60

// 1. Find Maximum Value in Array
// const numbers = [3, 7, 2, 9, 5];
const max = numbers.reduce((acc, num) => (num > acc ? num : acc), numbers[0]); // Output: 9

// 8. Filter and Transform Array in One Pass: Filter an array and transform elements at the same time.
// const numbers = [1, 2, 3, 4, 5];
const doubledEvens = numbers.reduce((acc, num) => {
  if (num % 2 === 0) acc.push(num * 2);
  return acc;
}, []); // Output: [4, 8]

// 7. Removing Duplicate Values: Eliminate duplicate values from an array.
// const numbers = [1, 2, 3, 4, 3, 2];
const uniqueNumbers = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) acc.push(num);
  return acc;
}, []); // Output: [1, 2, 3, 4]

// 6. Partition Array into Two Groups: Separate an array into two groups based on a condition.
// const numbers = [1, 2, 3, 4, 5, 6];
const partitioned = numbers.reduce((acc, num) => {
    num % 2 === 0 ? acc.even.push(num) : acc.odd.push(num);
    return acc;
  },
  { even: [], odd: [] }
);// Output: { even: [2, 4, 6], odd: [1, 3, 5] }

// 4. Grouping Objects by Property: Group objects by a specific property, such as category or type.
const items = [
    { name: "apple", type: "fruit" },
    { name: "carrot", type: "vegetable" },
    { name: "banana", type: "fruit" },
  ];
  const grouped = items.reduce((acc, item) => {
    (acc[item.type] = acc[item.type] || []).push(item);
    return acc;
  }, {}); // Output: { fruit: [{...}, {...}], vegetable: [{...}] }

// 2. Flattening an Array of Arrays : Convert a 2D array or nested array into a single flat array.
const arrays = [[1, 2],[3, 4],[5, 6]];
const flatArray = arrays.reduce((acc, curr) => acc.concat(curr), []); // Output: [1, 2, 3, 4, 5, 6]

// 3. Counting Occurrences of Values : Count how many times each item appears in an array.
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {}); // Output: { apple: 3, banana: 2, orange: 1 }



// 5. Calculating a Running Total : Generate an array of running totals.
const transactions = [10, -5, 15];
const runningTotal = transactions.reduce((acc, amount, index) => {
  acc.push((acc[index - 1] || 0) + amount);
  return acc;
}, []); // Output: [10, 5, 20]

// 6. Transforming Data Structures: Convert an array of objects into a different data structure, like an object.
const users = [
  { id: "u1", name: "Alice" },
  { id: "u2", name: "Bob" },
];
const usersById = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {}); // Output: { u1: { id: 'u1', name: 'Alice' }, u2: { id: 'u2', name: 'Bob' } }

// 8. Chaining Promises in an Array: Execute a series of asynchronous operations in sequence.
const tasks = [task1, task2, task3];
tasks.reduce((promiseChain, currentTask) => {
  return promiseChain.then(currentTask);
}, Promise.resolve());

// 2. Convert Array of Key-Value Pairs to Object
// Use Case: Convert an array of key-value pairs into an object.

const keyValuePairs = [
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
];
const obj = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
// Output: { name: 'Alice', age: 25, city: 'New York' }

// 3. Intersection of Arrays : Find common elements in multiple arrays.
// const arrays = [[5, 10, 15], [10, 20, 5], [5, 10, 30]];
const commonElements = arrays.reduce((acc, curr) =>
  acc.filter((num) => curr.includes(num))
); // Output: [5, 10]

// 4. Create a Frequency Map from String
// Use Case: Count occurrences of each character in a string.
const str = "hello world";
const frequency = str.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// 5. Extract Unique Values from Array of Objects
// Use Case: Extract unique values from a specific property in an array of objects.
// const items = [
//   { id: 1, category: 'fruit' },
//   { id: 2, category: 'vegetable' },
//   { id: 3, category: 'fruit' },
// ];
const uniqueCategories = items.reduce((acc, item) => {
  if (!acc.includes(item.category)) acc.push(item.category);
  return acc;
}, []);
// Output: ['fruit', 'vegetable']

// 7. Sum Values by Property in Array of Objects
// Use Case: Sum a specific property across all objects in an array.
const orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 150 },
];
const totalAmount = orders.reduce((acc, order) => acc + order.amount, 0); // Output: 450

// 9. Convert Array of Objects to a Lookup Table
// Use Case: Transform an array into an object where each key is an object’s property.

{
  const users = [
    { id: "u1", name: "Alice" },
    { id: "u2", name: "Bob" },
  ];
  const usersById = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}); // Output: { u1: { id: 'u1', name: 'Alice' }, u2: { id: 'u2', name: 'Bob' } }
}

// 10. Merge Multiple Arrays into One Object
// Use Case: Combine multiple arrays of keys and values into a single object.
{
  const keys = ["name", "age", "city"];
  const values = ["Alice", 25, "New York"];
  const obj = keys.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {});
  // Output: { name: 'Alice', age: 25, city: 'New York' }
}









// 1. Filter Even or Odd Numbers
// const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0); // Even numbers Output: [2, 4]
const oddNumbers = numbers.filter(num => num % 2 !== 0); // Odd numbers   Output: [1, 3, 5]

// 2. Remove Falsy Values
const values = [0, 1, false, 2, '', 3];
const truthyValues = values.filter(Boolean);  // Output: [1, 2, 3]

// 3. Filter Objects by Property
// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
// ];
const adults = users.filter(user => user.age >= 30); // Output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

// 4. Search in Arrays
// const products = ['apple', 'banana', 'grape', 'orange'];
const query = 'ap';
const filteredProducts = products.filter(product => product.includes(query));
console.log(filteredProducts); // Output: ['apple', 'grape']

// 5. Extract Unique Values
// const items = [1, 2, 2, 3, 4, 4, 5];
const uniqueItems = items.filter((item, index) => items.indexOf(item) === index); // Output: [1, 2, 3, 4, 5]

// 6. Filter by String Length
const strings = ['apple', 'banana', 'kiwi', 'mango'];
const longStrings = strings.filter(str => str.length > 5);  // Output: ['banana']


// 7. Get Active Users
// const users = [
//   { name: 'Alice', active: true },
//   { name: 'Bob', active: false },
//   { name: 'Charlie', active: true },
// ];
const activeUsers = users.filter(user => user.active);
// Output: [{ name: 'Alice', active: true }, { name: 'Charlie', active: true }]


// 8. Filter Items in a Shopping Cart
const cartItems = [
  { product: 'apple', inStock: true },
  { product: 'banana', inStock: false },
  { product: 'orange', inStock: true },
];
const inStockItems = cartItems.filter(item => item.inStock);
// Output: [{ product: 'apple', inStock: true }, { product: 'orange', inStock: true }]


// 9. Filter Dates
const dates = [
  new Date('2024-01-01'),
  new Date('2024-05-01'),
  new Date('2024-07-01'),
];
const filteredDates = dates.filter(date => date > new Date('2024-04-01'));
console.log(filteredDates); // Output: [2024-05-01T00:00:00.000Z, 2024-07-01T00:00:00.000Z]

// 10. Get Products Below a Certain Price
// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 300 },
// ];
const affordableProducts = products.filter(product => product.price < 600);
console.log(affordableProducts); // Output: [{ name: 'Phone', price: 500 }, { name: 'Tablet', price: 300 }]


// 11. Filter by Rating
const movies = [
  { title: 'Inception', rating: 8.8 },
  { title: 'Interstellar', rating: 8.6 },
  { title: 'The Room', rating: 3.7 },
];
const highRatedMovies = movies.filter(movie => movie.rating >= 8.5);
// Output: [{ title: 'Inception', rating: 8.8 }, { title: 'Interstellar', rating: 8.6 }]

// 12. Filter Products by Category
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shoes', category: 'Fashion' },
  { name: 'Smartphone', category: 'Electronics' },
];
const electronics = products.filter(product => product.category === 'Electronics');
// Output: [{ name: 'Laptop', category: 'Electronics' }, { name: 'Smartphone', category: 'Electronics' }]









const MyModule = (function () {
  let privateVariable = "I am private";           // Private variable


  function privateFunction() {
      console.log(privateVariable);            // Private function
  }

  // Public API
  return {
      publicMethod: function () {
          privateFunction(); // Accessing private function
      },
      setPrivateVariable: function (newValue) {
          privateVariable = newValue; // Modifying private variable
      },
      getPrivateVariable: function () {
          return privateVariable; // Exposing private variable
      }
  };
})();

// Usage
MyModule.publicMethod(); // Output: I am private
console.log(MyModule.getPrivateVariable()); // Output: I am private

MyModule.setPrivateVariable("New value");
console.log(MyModule.getPrivateVariable()); // Output: New value

// Trying to access private variables or functions will result in an error
// console.log(MyModule.privateVariable); // undefined
// MyModule.privateFunction(); // TypeError: MyModule.privateFunction is not a function






