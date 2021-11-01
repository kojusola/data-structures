// Traverse Two dimensional Arrays
export const traverseTwoDimensionalArray = (myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
    }
  }
};

//create Threedimensional Arrays
export const newMultidimensionalArray = () => {
  let threeXMatrics = [];
  for (let i = 0; i < 5; i++) {
    threeXMatrics[i] = [];
    for (let j = 0; j < 5; j++) {
      threeXMatrics[i][j] = [];
      for (let k = 0; k < 5; k++) {
        threeXMatrics[i][j][k] = k;
      }
    }
  }
  return threeXMatrics;
};

// Traverse Three dimensional Arrays
export const traverseThreeDimensionalArray = (myArray) => {
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      for (let k = 0; k < myArray[j].length; k++) {
        console.log(myArray[i][j][k]);
      }
    }
  }
};
