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