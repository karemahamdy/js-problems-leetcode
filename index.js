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