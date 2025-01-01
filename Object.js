//1. Invert Key-Value Pairs in an Object
const invertObject = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
};
console.log(invertObject({a: 1, b: 2, c: 3})); // Output: {1: 'a', 2: 'b', 3: 'c'}


// 2. Merge Two Objects
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4})); // Output: {a: 1, b: 3, c: 4}

// 3. Find Objects with Specific Property Value in an Array
const findObjectsByValue = (arr, key, value) => {
  return arr.filter(obj => obj[key] === value);
};
console.log(findObjectsByValue([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], 'age', 25)); // Output: [{name: 'Alice', age: 25}]

// 4. Flatten a Nested Object
const flattenObject = (obj, prefix = '') => {
  let result = {};
  for (let key in obj) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};
console.log(flattenObject({a: {b: 2, c: {d: 3}}})); // Output: {'a.b': 2, 'a.c.d': 3}

// 5. Count Unique Properties in an Array of Objects
const countUniqueProperties = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || 0) + 1;
    return acc;
  }, {});
};
const arr5 = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Alice'}];
console.log(countUniqueProperties(arr5, 'name')); // Output: {Alice: 2, Bob: 1}

// 6. Group Objects by Property
const groupByProperty = (arr, key="type") => {
  return arr.reduce((acc, obj) => {
    const group = obj['type'];
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(obj);
    return acc;
  }, {});
};
console.log(groupByProperty([{type: 'fruit', name: 'apple'}, {type: 'vegetable', name: 'carrot'}], 'type')); 
// Output: {fruit: [{type: 'fruit', name: 'apple'}], vegetable: [{type: 'vegetable', name: 'carrot'}]}


// 7. Remove Duplicate Objects from Array
const removeDuplicates = (arr, key) => {
  const seen = new Set();
  return arr.filter(obj => {
    if (!seen.has(obj[key])) {
      seen.add(obj[key]);
      return true;
    }
    return false;
  });
};
const arr7 = [{id: 1, name: 'Alice'}, {id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
console.log(removeDuplicates(arr7, 'id')); // Output: [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}]


// 9. Deep Clone an Object
const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
const obj9 = {a: 1, b: {c: 2}};
console.log(deepClone(obj9)); // Output: {a: 1, b: {c: 2}} (not referencing the same inner object)

// 10. Find the Most Frequent Property Value in Array of Objects
const mostFrequentValue = (arr, key) => {
  const frequency = arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
};
const arr10 = [{color: 'red'}, {color: 'blue'}, {color: 'red'}];
console.log(mostFrequentValue(arr10, 'color')); // Output: 'red'


// 11. Filter Object by Allowed Keys
const filterObjectByKeys = (obj, allowedKeys) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => allowedKeys.includes(key)));
};
const obj11 = {a: 1, b: 2, c: 3};
console.log(filterObjectByKeys(obj11, ['a', 'c'])); // Output: {a: 1, c: 3}


// 12. Calculate Sum of Specific Property in Array of Objects
const sumProperty = (arr, key) => {
  return arr.reduce((sum, obj) => sum + obj[key], 0);
};
console.log(sumProperty([{value: 10}, {value: 20}, {value: 30}], 'value')); // Output: 60

// 13. Convert Array of Objects to Single Object with Counts
const countOccurrences = (arr, key) => {
  return arr.reduce((acc, obj) => {
    acc[obj[key]] = (acc[obj[key]] || 0) + 1;
    return acc;
  }, {});
};
const arr = [{fruit: 'apple'}, {fruit: 'orange'}, {fruit: 'apple'}];
console.log(countOccurrences(arr, 'fruit')); // Output: {apple: 2, orange: 1}


// 14. Get All Keys or Values of Nested Object
const getAllKeysOrValues = (obj, type = 'keys') => {
  const result = [];
  const helper = (o) => {
    for (let key in o) {
      if (type === 'keys') {
        result.push(key);
      } else {
        result.push(o[key]);
      }
      if (typeof o[key] === 'object' && o[key] !== null) {
        helper(o[key]);
      }
    }
  };
  helper(obj);
  return result;
};
const obj = {a: {b: 1}, c: {d: 2}};
console.log(getAllKeysOrValues(obj, 'keys')); // Output: ['a', 'b', 'c', 'd']
console.log(getAllKeysOrValues(obj, 'values')); // Output: [1, 2]

// 15. Check if Two Objects are Deeply Equal
const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
};
const obj1 = {a: 1, b: {c: 2}};
const obj2 = {a: 1, b: {c: 2}};
console.log(deepEqual(obj1, obj2)); // Output: true



//16 How can you check if an object is empty?
function isEmpty(obj) {
  return JSON.stringify(obj) === "{}";
  // return Object.keys(obj).length === 0;

}
console.log(isEmpty({}));  // Output: true
console.log(isEmpty({ name: "Alice" }));  // Output: false



// 17 common between this array
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12, f: 6 };
const input2 = { a: 5, b: 7, e: 12, d: 10 };

const commonEntries = Object.entries(input1).filter(
  ([key, value]) => input2[key] === value
);
const result = Object.fromEntries(commonEntries);

console.log(result); // Output: { d: 10, e: 12 }