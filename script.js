function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
let numbers = [1, 2, 3, 4, 5];
myEach(numbers, function(number) {
  console.log(number); // 1 2 3 4 5
});

//-----------------------------------------------------------------------------------------------------

function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
let num = [1, 2, 3, 4, 5];

let doubledNumbers = myMap(numbers, function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
