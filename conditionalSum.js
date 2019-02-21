const conditionalSum = function(values, condition) {
  var num = 0;
  if (condition === "even") {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        num = num + values[i];
      }
    }
  } else if (condition === "odd") {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        num = num + values[i];
      }
    }
  }
  return num;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));