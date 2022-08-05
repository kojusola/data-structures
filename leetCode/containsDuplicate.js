// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// solution 2

var containsDuplicate = function (nums) {
  const duplicates = new Set();

  for (let i = 0; i < nums.length; i++) {
    duplicates.add(nums[i]);
  }
  if (duplicates.size === nums.length) {
    return false;
  } else {
    return true;
  }
};

// solution 3 : Optimized solution

var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return nums.length !== set.size;
};
