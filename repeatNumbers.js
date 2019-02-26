let repeatNumbers = function(data) {
  var num = ""
  var temp = ""
  for (var i = 0; i < data.length; i++) {
    num += data[i][0];
    num = num.repeat(data[i][1]);
    temp = temp + num + ', ';
    num = "";
  }
  var solution = ""
  for (var i = 0; i < temp.length - 2; i++) {
    solution = solution + temp[i];

  }
  return solution;

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));