function closestNumbers(numbers) {
  let minimumDifference = 0;
  let minimumDifferenceArray = [];
  let left = 0;
  let right = 1;
  numbers.sort((a, b) => a - b);
  while (right < numbers.length) {
    minimumDifferenceArray.push(Math.abs(numbers[left] - numbers[right]));
    left = right;
    right++;
  }
  minimumDifference = minimumDifferenceArray.reduce(function (p, v) {
    return p < v ? p : v;
  });
  for (let i = 0; i < numbers.length; i++) {
    if (Math.abs(numbers[i] - numbers[i + 1]) == minimumDifference) {
      console.log(numbers[i] + " " + numbers[i + 1]);
    }
  }
  return 0;
}
