let camelCase = function(input) {
    var newWord = ""
  for ( var i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        newWord != newWord + input[i];
    } else {
        newWord += input[i];
        }
    }
    return newWord;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));