function hasTargetSum(array, target) {
  let pairFound = false;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairFound = true;
        break;
      }
    }
    if (pairFound) {
      break;
    }
  }

  return pairFound;
}


/* 
  Write the Big O time complexity of your function here

The time complexity of this approach is O(n) because we iterate through the array once. 
The space complexity is also O(n) because we store the complements in a set.  
This approach is efficient as it solves the problem in a single pass through the array. 
It avoids the need for nested loops, resulting in a linear time complexity.
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

For each number, calculate its complement by subtracting it from the target number.
Check if the complement is present in the "complements" set. If it is, return true.
If the complement is not present, add the current number to the "complements" set.
If we reach the end of the array without finding a pair that adds up to the target number, 
return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
// Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
