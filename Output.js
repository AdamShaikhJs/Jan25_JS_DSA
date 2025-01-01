

+true        // 1
+null        // 0
+undefined   // NaN
-"25"        // -25
-true        // -1
-null        // 0
-undefined   // NaN

typeof 42            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" (quirk in JavaScript)
typeof Symbol("id")  // "symbol"
typeof {}            // "object"
typeof []            // "object" (arrays are objects in JavaScript)
typeof function(){}  // "function"
typeof Infinity // "number"
typeof -Infinity // "number"
Infinity === Infinity // true
-Infinity === -Infinity // true
Infinity === -Infinity // false
-Number.MAX_VALUE * 2 // -Infinity
const z = '' ?? 'default';     // `''` is not nullish, so '' is returned    // ""

null ?? 'default';  // `null` is nullish, so 'default' is returned
0 ?? 'default';     // `0` is not nullish, so 0 is returned  // 0
0 || false || "hello";   // 0 and false are falsy, "hello" is truthy
null || undefined || ''; // all are falsy, so the last value ('') is returned
"first" || "second" || "third"; // "first" is truthy, so it returns immediately


!true            // false
!false           // true
!0              // true (0 is falsy)
!1              // false (1 is truthy)
!"hello"        // false (non-empty string is truthy)
!""           // true (empty string is falsy)
!null         // true (null is falsy)
!undefined    // true (undefined is falsy)
console.log(!NaN);          // true (NaN is falsy)
console.log(!{});           // false (object is truthy)
// console.log!([]);           // false (array is truthy)

!!"hello"      // true (non-empty string is truthy)
!!""           // false (empty string is falsy)
!!123          // true (non-zero number is truthy)
!!0            // false (0 is falsy)
!!null         // false (null is falsy)
!!undefined    // false (undefined is falsy)
!!NaN          // false (NaN is falsy)
!!{}           // true (object is truthy)
!![]           // true (array is truthy)

isNaN(NaN)      // true
isNaN("text")   // true (cannot be converted to a number)
isNaN(undefined) // true (undefined cannot be converted to a number)
isNaN(4)        // false
isNaN(0)        // false
isNaN(-0)       // false
isNaN(Infinity)  // false
NaN === NaN // false

const values = [4, "abc", NaN, 2, undefined];
const validNumbers = values.filter(value => !isNaN(value));
console.log(validNumbers); // [4, 2]

0 / 0           // NaN
Math.sqrt(-1)   // NaN
"text" * 2      // NaN
Math.sqrt(-1)   // NaN
"text" * 2      // NaN
Number("abc")   // NaN
NaN === NaN    // false
NaN + 5        // NaN
NaN * 10       // NaN
NaN / 2        // NaN
Number.isNaN(NaN)   // true
Number.isNaN("NaN") // false (string "NaN" is not a number)
Number.isNaN(5)     // false

// String Concatenation
let a = 5 + '5'; // "55"
let b = 'Hello ' + 'World'; // "Hello World"

// Arithmetic Operations
  '10' - 5; // 5
  '5' * 2; // 10
  '20' / 2; // 10
  '15' + 5; // "155"
  '10' + 10; // "1010"

// Boolean Context
if (0) {
  // This will not be executed.
}

if (1) {
  // This will be executed.
}

// Using == Operator
0 == '0'; // true
null == undefined; // true
'' == false; // true
1 == true; // true
false == ''; // true
'1' == true; // true
'0' == false; // true

// Using ! (Not Operator)
!'hello'; // false
!0; // true
!undefined; // true
!NaN; // true
!false; // true

// Using Number()
Number('123'); // 123
Number(''); // 0
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number('42.5'); // 42.5
Number('3.14e2'); // 314

// Using String()
String(123); // "123"
String(null); // "null"
String(undefined); // "undefined"
String(true); // "true"
String(false); // "false"
String([1, 2, 3]); // "1,2,3" (array is converted to string)

// Using == with Objects
let obj = { value: 5 };
obj == 5; // false
obj == '[object Object]'; // true (when object is coerced to string)

// Implicit conversion with +
 1 + '2'; // "12"
'5' * 2; // 10
 1 + true; // 2
'1' + 1; // "11"

// Implicit conversion with arrays
let arr = [1, 2, 3];
arr + 4; // "1,2,34" (array is converted to string)
arr + '4'; // "1,2,34" (array is converted to string)

// Using `!` with various values
!null; // true
!NaN; // true
!1; // false
!''; // true
![]; // false (empty array is truthy)

// Using Array with implicit conversion
[] + []; // "" (both arrays are converted to strings)
[1] + [2]; // "12" (arrays are converted to strings)
[1, 2] == '1,2'; // true (array is converted to string)

// Implicit conversions in ternary operators
let x = '5';
let y = 10;
// let z = (x == 5) ? 'Equal' : 'Not Equal'; // "Not Equal"
let w = (y == 10) ? true : false; // true

// Coercing objects to primitives
let obj2 = {
  valueOf() { return 10; },
  toString() { return '20'; }
};

let result5 = obj2 + 5; // 15 (valueOf is used)

// Implicit conversion in comparison
1 == '1'          // true
1 === '1'         // false (strict equality)
null == undefined // true
'' == false    // true
// [] == false    // true

   "The answer is: " + 42;         //  "The answer is: 42"
    5 + false;                  //  5   
   "Value is: " + null;        //  "Value is: null"
   "value is: " + undefined;  //  "value is: undefined"
   [] + [];                       //  ""
   [1, 2] + " is an array";      //  "1,2 is an array"
   true + [1, 2, 3];            //  "true1,2,3"
   [42] + " is the answer";    //  "42 is the answer"
   "Mixed: " + [1, "two", true, null];//  "Mixed : 1,two,true,"
   [1, 2, 3] + 4;     //  "1,2,34"
   [1, 2] + [3, 4];  //  "1,23,4"

 7 + " apples";           // Output: "7 apples"
 "The function is: " + function() {};  // Output: "The function is: function() {}"
"Object value: " + { prop: 123 };   // Output: "Object value: [object Object]"
 "Today is: " + new Date();    // Output: "Today is: [current date]"
 "The value is: " + Infinity;  
// Output: "The value is: Infinity"
"Negative zero is: " + -0;     // Output: "Negative zero is: 0"
 "Not a number is: " + NaN;    // Output: "Not a number is: NaN"
"Empty object: " + {};         // Output: "Empty object: [object Object]"
 5 + { key: "value" };      // Output: "5[object Object]"

 true + null;  // Output: 1
 "Symbol value: " + Symbol("desc");       // Output: "Symbol value: Symbol(desc)"
"BigInt value: " + BigInt(123);  // Output: "BigInt value: 123"
false + 10;             // Output: 10
2024 + new Date();     // Output: "2024[date string]"
new Date() + null;     // Output: "[current date]null"
new Date() + true;     // Output: "[current date]true"
undefined + { key: "value" };   // Output: "undefined[object Object]"
true + " is true";   // Output: "true is true"
 1 + "0";            // Output: "10"

// function() { return "Hello"; } + [1, 2, 3];  // Output: "function() { return "Hello"; }123"


 -Infinity + " is the lowest value";    // Output: "-Infinity is the lowest value"
"Float value: " + 3.14;     // Output: "Float value: 3.14"
undefined + undefined;     // Output: "NaN"
 2 + { valueOf: () => 3 };    // Output: 5
{ a: 1 } + 1;  // Output: "[object Object]1"
 "Joined: " + ["a", "b", "c"];   // Output: "Joined: a,b,c"
BigInt(5) + " is a BigInt";       // Output: "5 is a BigInt"
"Array as string: " + [1, 2, 3].toString();     // Output: "Array as string: 1,2,3"
//  { toString: () => "String", valueOf: () => 42 } + 8;  // Output: "String50"









