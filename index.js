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