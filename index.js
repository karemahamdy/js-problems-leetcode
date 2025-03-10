// array 207 problem
//remove dublicate:Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let containsDuplicate = function(nums) {
  const uniqueArray = [...new Set(nums)];
  if (uniqueArray.length !== nums.length ) {
      return true
  } else {
      return false
  }
  }
  console.log(containsDuplicate([1,2,3,1]))
  console.log(containsDuplicate([1,2,3,4]))
  console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))


  //2119. A Number After a Double Reversal
  // For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.
  // Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false
  
var isSameAfterReversals = function(num) {
  let numStr = num.toString();
  if ( num === 0) {
    return true
  } 
  let reversedStr = numStr.split('').reverse().join('');
  if (/^0[0-9]/.test(reversedStr)) {
    console.log("f");
    return false;
  } else {
    console.log("t");
    return true;
  }
}
  
isSameAfterReversals(8100)
isSameAfterReversals(526)


// 3190. Find Minimum Operations to Make All Elements Divisible by Three
var minimumOperations = function(nums) {
  let operation = 0 
  for( let i=0;i<nums.length; i++) {
      if ( nums[i]%3 != 0 ) {
          operation++
      }
     
  }
   return operation
};

// 2413. Smallest Even Multiple
// Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
var smallestEvenMultiple = function(n) {
  if ( n %2 === 0 ) {
      return n
  } else {
      return 2*n
  }
};

//1929. Concatenation of Array
//Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.
var getConcatenation = function(nums) {
  nums = [1,2,3]
  let num = nums
  let number = num.concat(nums)
   console.log(number)
};

getConcatenation()

// 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// nums = [2,5,1,3,4,7], n = 3

var shuffle = function(nums, n) {
  const shuffledArray = [];
     for (let i = 0; i < n; i++) {
      shuffledArray.push(nums[i]);
       shuffledArray.push(nums[n + i]);
  }
   return shuffledArray;
};

// 2011. Final Value of Variable After Performing Operations
// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

var finalValueAfterOperations = function(operations) {
  let  n = 0 

for (let operation of operations) {
     if (operation === "X++" || operation === "++X") {
         n++;
     } else if (operation === "X--" || operation === "--X") {
         n--;
     }
 }
 return n;
}

// 1688. Count of Matches in Tournament

var numberOfMatches = function(n) {
  if (n === 1) return 0;
  return (n % 2 === 0) ? n / 2 + numberOfMatches(n / 2) : (n - 1) / 2 + numberOfMatches((n - 1) / 2 + 1 )
  
  };
console.log(numberOfMatches(14))


// 3110. Score of a String

var scoreOfString = function(s) {
  s.charCodeAt()
  score = 0 
  for (let i = 0; i < s.length - 1; i++) {
   score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
   }
      return score
};

// 1598. Crawler Log Folder
var minOperations = function(logs) {
  folderDepth = 0
  for (const currentOperation of logs) {
     if (currentOperation === "../") {
        if (folderDepth > 0) folderDepth--;
     } else if (currentOperation !== "./"){
     folderDepth ++
     }
}
  return folderDepth;
};

logs =["d1/","d2/","../","d21/","./"]
console.log(minOperations(logs))

// 1929. Concatenation of Array
var getConcatenation = function (nums) {
let arr = [...nums, ...nums]
// let arr = nums.concat(nums)
return arr
}
nums = [1,2,1]

console.log(getConcatenation(nums))


// 1550. Three Consecutive Odds
var threeConsecutiveOdds = function(arr) {
  let count = 0;
  for(let i=0; i<arr.length; i++) {
      if(arr[i]%2 == 1) count++;
      else count = 0;
      if(count >= 3) return true; 
  }
  return false;
};

//2942. Find Words Containing Character
var findWordsContaining = function(words, x) {
  // check word = x
  // true -- return index 
  // [index+]
    let ans = [];
     for (let i = 0; i < words.length; i++) {
     words[i].includes(x)?ans.push(i): ans
     } 
     return  ans  
};

findWordsContaining()

//1672. Richest Customer Wealth
var maximumWealth = function(accounts) {
  // index 0 = [] = join + number + op+
  //index 1 = [] = join + number + op+
  // return max
      arr=[]
  for(let i=0;i<accounts.length;i++){
      arr.push(accounts[i].reduce((acc,cur)=> acc+cur,0))
  }
  return Math.max(...arr)

};

// 2652. Sum Multiples
var sumOfMultiples = function(n) {
  // 3 5 7 || 
  // loop in it and check 3 5 7
  let sum = 0
  for(let i =0; i<=n; i++) {
      if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0)
    sum  = sum + i
  }
  return sum
};

// 2114. Maximum Number of Words Found in Sentences
/**
 * @param {string[]} sentences
 * @return {number}
 */

var mostWordsFound = sentences => sentences.map(item => item.split(' ')).sort((a,b) => b.length - a.length)[0].length


// 3146. Permutation Difference between Two Strings
const findPermutationDifference = (s, t) => [...s].reduce((acc,el,id) => acc+= Math.abs(id - t.indexOf(el)),0);


// 1108. Defanging an IP Address
var defangIPaddr = function(address) {
  let split = address.split('')
   for(let i=0;i<split.length;i++){
    if (split[i]=="."){
        split[i] = "[.]"
        var join = split.join('')
         console.log(join)
    }
   }
   return join
};

//
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
     for (a of stones) {
         for (b of jewels) {
        b === a?count++:0
         }
     }
     return count;
 };

 //1678. Goal Parser Interpretation
 var interpret = function(command) {
  return command.split("()").join("o").split("(al)").join("al");
};


// 2373. Largest Local Values in a Matrix

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const nRows = grid.length;
  const nCols = grid[0].length;

  let result = new Array(nRows - 2).fill().map(() => new Array(nCols - 2).fill(0));

  for (let row = 0; row < nRows - 2; row++) {
      for (let col = 0; col < nCols - 2; col++) {
          result[row][col] = findLargest(grid, row, col);
      }
  }

  return result;
};

function findLargest(grid, row, col) {
  let best = grid[row][col];
  for (let i = row; i < row + 3; i++) {
      for (let j = col; j < col + 3; j++) {
          best = Math.max(best, grid[i][j]);
      }
  }
  return best;
}

// 2798. Number of Employees Who Met the Target
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let count = 0;
  hours.forEach(e => (e >= target ? count++ : count));
  return count;
};

// 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
  let result = []
    const maxCandies = Math.max(...candies);
  for(let i=0; i<candies.length; i++ ){
      if (candies[i] + extraCandies >= maxCandies ) {
          result.push(true)
      } else {
          result.push(false)
  }
      }

  return result
};


// 2535. Difference Between Element Sum and Digit Sum of an Array
var differenceOfSum = function(nums) {
  const first = nums.reduce((state,action) => {
      return state + action
  },0)
  const second = nums.join("").split("").reduce((state,action) => {
      return parseInt(state) + parseInt(action)
  },0)
  return Math.abs(first-second)
};


//3099. Harshad Number
var sumOfTheDigitsOfHarshadNumber = function(x) {
  let count = String(x).split('').reduce((prev, next) => prev + Number(next), 0);
 return x % count === 0 ? count : - 1;
};


/// 231. Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

var isPowerOfTwo = function(n) {
  // log 
  return n>0 && Math.log2(n) % 1 === 0
};


// 1360. Number of Days Between Two Dates
// Write a program to count the number of days between two dates.
// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.
 
var daysBetweenDates = function(date1, date2) {
  let mill = 1000 * 60 * 60 * 24 
  return Math.abs((new Date(date1).getTime() - new Date(date2).getTime() )/ mill)
};


// 1920. Build Array from Permutation

var buildArray = function(nums) {
  let ans = []
  for (let i = 0 ; i< nums.length ; i++ ) {
   ans[i] =  nums[nums[i]]
  } 
  return ans
};

//2022. Convert 1D Array Into 2D Array

var construct2DArray = function (or, m, n) {
  if (m * n !== or.length) {
      return [];
  }
  let arr = [];
  for (let i = 0, x = 0; i < m; i++) {
      arr[i] = [];
      for (let j = 0; j < n; j++) {
          arr[i][j] = or[x++];
      }
  }
  return arr;
};

// 66. Plus One
var plusOne = function(digits) {
  // join + num + 1  + arr again 
let c = digits.join("")
let n = BigInt(c) + BigInt(1);
return Array.from(String(n), Number);
};
digits = [4,3,2,1]
console.log(plusOne(digits))


// 492. Construct the Rectangle
// A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:
// The area of the rectangular web page you designed must equal to the given target area.
// The width W should not be larger than the length L, which means L >= W.
// The difference between length L and width W should be as small as possible.
// Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.

var constructRectangle = function(area) {
   let width = Math.floor(Math.sqrt(area)) 
   while (area % width !== 0 ) 
   width -- 
   return [area / width , width ] 
};


// 2630. Memoize II
// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs.Instead it will return a cached value.
// fn can be any function and there are no constraints on what type of values it accepts.Inputs are considered identical if they are === to each other.
//   Example 1:
// Input:
// getInputs = () => [[2, 2], [2, 2], [1, 2]]
// fn = function (a, b) { return a + b; }
// Output: [{ "val": 4, "calls": 1 }, { "val": 4, "calls": 1 }, { "val": 3, "calls": 2 }]
// Explanation:
// const inputs = getInputs();
// const memoized = memoize(fn);
// for (const arr of inputs) {
//   memoized(...arr);
// }
// For the inputs of(2, 2): 2 + 2 = 4, and it required a call to fn().
// For the inputs of(2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
// For the inputs of(1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.

class LookupTree {
  map = new Map();

  hasValue = false;

  value = null;

  getValueHelper(path, i) {
    const key = path[i];
    if (i >= path.length) {
      if (this.hasValue) {
        return { value: this.value, success: true };
      } else {
        return { value: undefined, success: false };
      }
    } else {
      if (this.map.has(key)) {
        return this.map.get(key).getValueHelper(path, i + 1);
      } else {
        return { value: undefined, success: false };
      }
    }
  }

  getValue(path) {
    return this.getValueHelper(path, 0);
  }

  setValueHelper(path, i, value) {
    const key = path[i];
    if (i >= path.length) {
      this.value = value;
      this.hasValue = true;
    } else {
      if (!this.map.has(key)) {
        this.map.set(key, new LookupTree());
      }
      return this.map.get(key).setValueHelper(path, i + 1, value);
    }
  }

  setValue(path, value) {
    return this.setValueHelper(path, 0, value);
  }
}

function memoize(func) {
  const tree = new LookupTree();
  const newFunction = (...params) => {
    const cache = tree.getValue(params);
    if (cache.success) {
      return cache.value;
    }
    const result = func(...params);
    tree.setValue(params, result);
    return result;
  };
  return newFunction;
}


// 2618. Check if Object Instance of Class

var checkIfInstanceOf = function (obj, classFunction) {
  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);

  }

  return false;
};
// isAnagram
var isAnagram = function (s, t) {
  s = s.split("").sort()
  t = t.split("").sort()

  if (s.length !== t.length)
    return false;

  for (var i = 0; i < s.length; i++)
    if (s[i] !== t[i])
      return false;

  return true;
};

//
// Delete the Middle Node of a Linked List

var deleteMiddle = function (head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev) {
    prev.next = slow.next;
  }

  return head;
};

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

function canPlaceFlowers(flowerbed, n) {
  let count = 0; 
  if (n === 0 ) {
      return true
  } else {
  for (let i = 0; i < flowerbed.length; i++) {
    
      if (flowerbed[i] === 0) {
               let prevEmpty = (i === 0 || flowerbed[i - 1] === 0); 
          let nextEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0); 

          if (prevEmpty && nextEmpty) {
              flowerbed[i] = 1;  
              count++;         
              if (count >= n) {
                  return true;  
              }
          }
      }
    }
  }
}

// GCD problem 
// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
let gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return "";
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  let gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};

// Odd Even Linked List
function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

// 1726. Tuple with Same Product
// Given an array nums of distinct positive integers, return the number of tuples(a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.
  // Example 1:
// Input: nums = [2, 3, 4, 6]
// Output: 8
// Explanation: There are 8 valid tuples:
// (2, 6, 3, 4), (2, 6, 4, 3), (6, 2, 3, 4), (6, 2, 4, 3)
// (3, 4, 2, 6), (4, 3, 2, 6), (3, 4, 6, 2), (4, 3, 6, 2)
  
function tupleSameProduct(nums) {
  let productMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let product = nums[i] * nums[j];
      if (productMap.has(product)) {
        productMap.set(product, productMap.get(product) + 1);
      } else {
        productMap.set(product, 1);
      }
    }
  }

  let result = 0;
  for (let count of productMap.values()) {
    if (count > 1) {

      result += (count * (count - 1) / 2) * 8;
    }
  }
  return result;
}

// 1790. Check if One String Swap Can Make Strings Equal
// Hint
// You are given two strings s1 and s2 of equal length.A string swap is an operation where you choose two indices in a string(not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.Otherwise, return false.

var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let diffs = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffs.push(i);
  }

  return diffs.length === 2 &&
    s1[diffs[0]] === s2[diffs[1]] &&
    s1[diffs[1]] === s2[diffs[0]];
};

// Maximum Ascending Subarray Sum
// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
//A subarray[numsl, numsl + 1, ..., numsr - 1, numsr] is ascending if for all i where l <= i < r, numsi < numsi + 1. Note that a subarray of size 1 is ascending.

var maxAscendingSum = function (nums) {
  let maxNum = [0];
  let currentNum = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentNum += nums[i]
    } else {
      maxNum = Math.max(maxNum, currentNum)
      currentNum = nums[i]
    }
  }
  return maxNum = Math.max(maxNum, currentNum)
};

// 3160. Find the Number of Distinct Colors Among the Balls

// You are given an integer limit and a 2D array queries of size n x 2.
// There are limit + 1 balls with distinct labels in the range[0, limit].Initially, all balls are uncolored.For every query in queries that is of the form[x, y], you mark ball x with the color y.After each query, you need to find the number of distinct colors among the balls.
// Return an array result of length n, where result[i] denotes the number of distinct colors after ith query.
// Note that when answering a query, lack of a color will not be considered as a color.

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const ballMapColor = new Map();
  const colorMapCount = new Map();
  const res = [];
  let distinct = 0;

  return queries.map(([ball, newColor]) => {
    const color = ballMapColor.get(ball);
    ballMapColor.set(ball, newColor);
    if (color) {
      colorMapCount.set(color, (colorMapCount.get(color) ?? 0) - 1);
    }

    if (!colorMapCount.get(newColor)) {
      distinct++;
    }

    if (color && !colorMapCount.get(color)) {
      distinct--;
    }

    const countNewColor = (colorMapCount.get(newColor) ?? 0)

    colorMapCount.set(newColor, countNewColor + 1);

    return distinct;
  })

  return res;
};


// 1726. Tuple with Same Product

// Given an array nums of distinct positive integers, return the number of tuples(a, b, c, d) such that a * b = c * d where a, b, c, and d are elements of nums, and a != b != c != d.

/**
 * @param {number[]} nums
 * @return {number}
 */
function tupleSameProduct(nums) {
  let productMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let product = nums[i] * nums[j];
      if (productMap.has(product)) {
        productMap.set(product, productMap.get(product) + 1);
      } else {
        productMap.set(product, 1);
      }
    }
  }

  let result = 0;
  for (let count of productMap.values()) {
    if (count > 1) {

      result += (count * (count - 1) / 2) * 8;
    }
  }
  return result;
}

// 1790. Check if One String Swap Can Make Strings Equal

// You are given two strings s1 and s2 of equal length.A string swap is an operation where you choose two indices in a string(not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings.Otherwise, return false.

var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;

  let diffs = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffs.push(i);
  }

  return diffs.length === 2 &&
    s1[diffs[0]] === s2[diffs[1]] &&
    s1[diffs[1]] === s2[diffs[0]];
};

// 1422. Maximum Score After Splitting a String
// Given a string s of zeros and ones, return the maximum score after splitting the string into two non - empty substrings(i.e.left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

var maxScore = function (s) {
  let totalZeros = 0, zeros = 0, ans = -1, n = s.length;
  for (let c of s) {
    if (c === '0') totalZeros++;
  }
  for (let i = 1; i < n; i++) {
    if (s[i - 1] === '0') {
      zeros++;
      totalZeros--;
    }
    ans = Math.max(ans, zeros + (n - totalZeros - i));
  }
  return ans;
};

// Removing Stars From a String

var removeStars = function (s) {
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*') {
      arr.splice(arr.length - 1, 1);
    } else {
      arr.push(s[i]);
    }
  }

  return arr.join('');
};


// Count Number of Bad Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let n = nums.length;
  let totalPairs = (n * (n - 1)) / 2; // Total possible pairs
  let goodPairs = 0;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    let key = nums[i] - i;
    if (map.has(key)) {
      goodPairs += map.get(key);
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  return totalPairs - goodPairs;
};

// Remove All Occurrences of a Substring

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  // iteration by part and replace it "" 
  // return divider 
  while (s.includes(part)) {
    s = s.replace(part, "")
  }
  return s
};

// Clear Digits

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};

// 2649. Nested Array Generator

// Given a multi - dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.
// A multi - dimensional array is a recursive data structure that contains both integers and other multi - dimensional arrays.
// inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.

// Input: arr = [[[6]], [1, 3], []]
// Output: [6, 1, 3]

/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {

  for (let item of arr) {
    if (Array.isArray(item)) {
      yield* inorderTraversal(item);
    } else {
      yield item
    }
  }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
// 3160. Find the Number of Distinct Colors Among the Balls

// You are given an integer limit and a 2D array queries of size n x 2.
// There are limit + 1 balls with distinct labels in the range [0, limit]. Initially, all balls are uncolored. For every query in queries that is of the form [x, y], you mark ball x with the color y. After each query, you need to find the number of colors among the balls.
// Return an array result of length n, where result[i] denotes the number of colors after ith query.
// Note that when answering a query, lack of a color will not be considered as a color.

// Example 1:
// Input: limit = 4, queries = [[1,4],[2,5],[1,3],[3,4]]
// Output: [1,2,2,3]

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
  const ballMapColor = new Map();
  const colorMapCount = new Map();
  const res = [];
  let distinct = 0;

  return queries.map(([ball, newColor]) => {
      const color = ballMapColor.get(ball);
      ballMapColor.set(ball, newColor);
      if (color) {
          colorMapCount.set(color, (colorMapCount.get(color) ?? 0) - 1);
      }
      
      if (!colorMapCount.get(newColor)) {
          distinct ++;
      }

      if (color && !colorMapCount.get(color)) {
          distinct --;
      }

      const countNewColor = (colorMapCount.get(newColor) ?? 0)

      colorMapCount.set(newColor, countNewColor + 1);

      return distinct;
  })

  return res;
};
