const multiplicationTable = function(maxValue) {
  var row = [];
  var table = "";
  var column = 1;
  while (maxValue > 0) {
    row.push(maxValue);
    maxValue = maxValue - 1;
  }
  row.sort(function(a, b){return a - b});
  while (column <= row[row.length - 1]) {
    for (var i = 0; i < row.length; i++) {
      table = table + " " + (column * row[i]);
    }
    table = table + "\n"
    column++
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
