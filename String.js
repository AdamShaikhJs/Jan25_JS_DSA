// 1. Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// 2. Check for Palindrome
function isPalindrome(str) {
    // Clean the string by removing non-alphanumeric characters and converting it to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversed;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

const isPalindrome = (str) => {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let reversedStr = '';
    // Build the reversed string using a for loop
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
        reversedStr += cleanedStr[i];
    }
    return cleanedStr === reversedStr;
};

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// 3. Count Vowels and Consonants
const countVowelsAndConsonants2 = (str) => {
    const vowels = 'aeiouAEIOU';
    let counts = { vowels: 0, consonants: 0 };
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
        if (vowels.includes(char)) {
          counts.vowels++;
        } else {
          counts.consonants++;
        }
      }
    }
    return counts;
  };
  console.log(countVowelsAndConsonants("For loops are versatile!"));
  // Output: { vowels: 9, consonants: 13 }
  

// 4. Remove Duplicates
function removeDuplicates(str) {
    return Array.from(new Set(str)).join('');
}
console.log(removeDuplicates("banana")); // Output: "ban"


// 5. Find the First Non-Repeating Character
function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
    }
    return null;
}
console.log(firstNonRepeatingChar("swiss")); // Output: "w"


// 6. Count Occurrences of Each Character
function countCharacterOccurrences(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}
console.log(countCharacterOccurrences("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }


// 7. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
    const format = str => str.split('').sort().join('');
    return format(str1) === format(str2);
}
console.log(areAnagrams("listen", "silent")); // Output: true

const areAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
  
    // Create a frequency map for the first string
    const frequencyMap = {};
    for (let char of str1) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }
  
    for (let char of str2) {                        // Check the second string against the frequency map
      if (!frequencyMap[char]) {
        return false; // Character not in map or count is zero
      }
      frequencyMap[char]--; // Decrement the count
    }
    return true;
  };
  console.log(areAnagrams("listen", "silent")); // Output: true


// 8. Find the Longest Word in a Sentence
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, '');
}
console.log(findLongestWord("I love programming")); // Output: "programming"

// 9. Convert String to Uppercase/Lowercase
function toUpperCase(str) {
    return str.toUpperCase();
}
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toUpperCase("hello")); // Output: "HELLO"
console.log(toLowerCase("HELLO")); // Output: "hello"

// 10. Replace Spaces with a Character
function replaceSpaces(str, char) {
    return str.split(' ').join(char);
}
console.log(replaceSpaces("hello world", "-")); // Output: "hello-world"

// 11. Find All Substrings of a String
function findAllSubstrings(str) {
    const substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.slice(i, j));
        }
    }
    return substrings;
}
console.log(findAllSubstrings("abc")); // Output: ["a", "ab", "abc", "b", "bc", "c"]

// 12. Check if a String Contains Only Digits
function isNumeric(str) {
    return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // Output: true


// 13. Remove a Given Character   Input: "hello", remove "l", Output: "heo"
function removeCharacter(str, charToRemove) {
    return str.replace(new RegExp(charToRemove, 'gi'), '');
}
console.log(removeCharacter("Banana", "a")); // Output: "Bnn"

function removeCharacter(str, charToRemove) {
    return str.split(charToRemove).join('');
}
console.log(removeCharacter("Hello, World!", "o")); // Output: "Hell, Wrld!"


//14. Rotate a String Example: Input: "abcdef", rotate by 2 to the right, Output: "efabcd"
function rotateString(str, n) {
    const len = str.length;

    // Ensure n is within the bounds of the string length
    n = n % len;

    // Convert the string into an array for easier manipulation
    const arr = str.split('');

    // Right rotation: Slice the array from -n to the end and the rest
    return arr.slice(-n).concat(arr.slice(0, len - n)).join('');
}

// Example Usage:
console.log(rotateString("abcdef", 2)); // Output: "efabcd"



//15. heck if a String is a Substring of Another Example: Input: "coding", "I love coding", Output: true
function isSubstring(str1, str2) {
    return str2.toLowerCase().includes(str1.toLowerCase());
}
console.log(isSubstring("coding", "I love coding")); // Output: true


//16 Reverse Each Word in a Sentence
function reverseWords(sentence) {
    return sentence
        .split(' ')  // Split the sentence into an array of words
        .map(word => word.split('').reverse().join(''))  // Reverse each word
        .join(' ');  // Join the words back into a sentence
}

// Example Usage:
console.log(reverseWords("hello world"));  // Output: "olleh dlrow"



//17 find the common characters in two strings
function findCommonCharacters(str1, str2) {
    // Convert both strings into sets of characters
    const set1 = new Set(str1);
    const set2 = new Set(str2);

    // Find the intersection of both sets
    const commonChars = [...set1].filter(char => set2.has(char));
    return commonChars;
}

// Example Usage:
console.log(findCommonCharacters("hello", "world"));  // Output: ["o", "l"]



// 18 generate all permutations of a string:
// Permutations: A permutation is any rearrangement of the characters of the string, 
function generatePermutations(str) {
    if (str.length === 1) return [str];  // Base case
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaining = str.slice(0, i) + str.slice(i + 1);
        let perms = generatePermutations(remaining);

        // Add current character to all permutations of the remaining string
        for (let perm of perms) {
            result.push(char + perm);
        }
    }
    return result;
}
console.log(generatePermutations("abc"));  // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
