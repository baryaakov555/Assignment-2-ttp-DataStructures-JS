function myEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
let numbers = [1, 2, 3, 4, 5];
myEach(numbers, function(number) {
  console.log(number); // 1 2 3 4 5
});

