const fib = (n) => {
  let fibMatrix = [
    [1, 1],
    [1, 0],
  ];

  if (n == 0) {
    return 0;
  }

  raiseToPower(fibMatrix, n - 1);

  return fibMatrix[0][0];
};

const raiseToPower = (matrix, n) => {
  if (n == 0 || n == 1) {
    return;
  }

  let newMatrix = [
    [1, 1],
    [1, 0],
  ];

  raiseToPower(matrix, Math.floor(n / 2));

  multiplyMatrices(matrix, matrix);

  if (n % 2 !== 0) {
    multiplyMatrices(matrix, newMatrix);
  }
};

const multiplyMatrices = (matrix, newMatrix) => {
  let x = matrix[0][0] * newMatrix[0][0] + matrix[0][1] * newMatrix[1][0];
  let y = matrix[0][0] * newMatrix[0][1] + matrix[0][1] * newMatrix[1][1];
  let z = matrix[1][0] * newMatrix[0][0] + matrix[1][1] * newMatrix[1][0];
  let w = matrix[1][0] * newMatrix[0][1] + matrix[1][1] * newMatrix[1][1];

  matrix[0][0] = x % 1000000;
  matrix[0][1] = y % 1000000;
  matrix[1][0] = z % 1000000;
  matrix[1][1] = w % 1000000;
};
