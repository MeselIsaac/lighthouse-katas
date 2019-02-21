let sumLargestNumbers = function(data) {
  var largeNum = 0;
  var secLargeNum = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] > largeNum) {
      secLargeNum = largeNum;
      largeNum = data[i];
    } else if (data[i] !== largeNum && data[i] > secLargeNum) {
      secLargeNum = data[i];
    }
  }
  return largeNum + secLargeNum;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([0, 0, 34, 6, 92, 2]));

/*let sumLargestNumbers = function(data) {
  var largeNum = Math.max.apply(null, data);
  var secLargeNum = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] === largeNum) {
      secLargeNum != data[i];
    } else if (data[i] >= secLargeNum) {
      secLargeNum = data[i];
    }
  }
  return largeNum + secLargeNum;

};




let sumLargestNumbers = function(data) {
  var largeNum = 0;
  var secLargeNum = 0;

  if (data[0] > data[1] || data[0] === data[1]) {
    largeNum = data[0];
    secLargeNum = data[1];
  } else {
    largeNum = data[1];
    secLargeNum = data[0];
  }

  for (var i = 2; i < data.length; i++) {
    if (data[i] > largeNum) {
      secLargeNum = largeNum;
      largeNum = data[i];
    } else if (data[i] !== largeNum && data[i] > secLargeNum) {
      secLargeNum = data[i];
    }
  }
  return largeNum + secLargeNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([1, 1, 34, 6, 92, 2]));*/
