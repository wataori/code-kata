var quickSort = function(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array.pop();
  var lower = [];
  var higher = [];

  for(var i = 0; i < array.length; i++) {
    if (array[i] >= pivot) {
      higher.push(array[i]);
    } else {
      lower.push(array[i]);
    }
  }
  return quickSort(lower).concat(pivot).concat(quickSort(higher));
};

console.log(quickSort([73, 12, 10, 53, 40, 43, 15, 95, 69, 16, 64, 90, 36, 79, 13, 24, 47, 55, 74, 46, 38, 17, 56, 14, 80, 28, 48, 34, 76, 60, 25, 52, 63, 5, 68, 100, 31, 75, 6, 82, 77, 99, 61, 50, 58, 45, 85, 88, 8, 30, 84, 3, 2, 97, 20, 57, 41, 70, 71, 18, 39, 81, 9, 22, 92, 67, 11, 4, 87, 94, 37, 26, 83, 59, 54, 23, 44, 49, 65, 51, 29, 35, 91, 62, 1, 96, 98, 27, 72, 21, 42, 7, 89, 78, 86, 19, 93, 32, 33, 66]));
