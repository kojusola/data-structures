//write a function that counts the number of items in an array bearing in mind that arrays can be nested in each other
var names = ["bob", ["steve", "michael", "bob", "chris"]];

export const numberOfItems = (arr, item) => {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      result += numberOfItems(arr[i], item);
    } else {
      if (arr[i] == item) {
        result++;
      }
    }
  }
  return result;
};

var result = numberOfItems(names, "bob");
console.log(result);

function matchKeyCombo(sequence) {
  let q = 0;
  let z = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (
      sequence[i] === "Q" &&
      sequence[i + 1] === "E" &&
      sequence[i + 2] === "E"
    )
      q++;
    else if (
      sequence[i] === "Z" &&
      sequence[i + 1] === "C" &&
      sequence[i + 2] === "C"
    )
      z++;
  }
  console.log(q, z);
  return q === z;
}

async function runSequentially(functions) {
  // write code here
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error:" + error));
}
module.exports.runSequentially = runSequentially;
