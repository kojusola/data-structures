var missingNumber = function (nums) {
  const numsLength = nums.length;
  const allValues = [...Array(numsLength).keys()];
  allValues.shift();
  const missing = allValues.filter((x) => !nums.includes(x));
  console.log(missing);
  return missing[0];
};
