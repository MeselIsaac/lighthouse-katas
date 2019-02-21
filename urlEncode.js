const urlEncode = function(text) {
  var newWord = text.trim();
  var encoded = "";
  for (var i = 0; i < newWord.length; i++) {
    if (newWord[i] === " ") {
      encoded += "%20";
    } else {
      encoded += newWord[i];
    }
  }
  return encoded;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*const urlEncode = function(text) {
  for (var i = 0; i < text.length-1; i++) {
    if (text[0] === "") {
      text[0] === "";
    } else if (text[text.length-1] === "") {
      text[text.length-1] === "";
    } else if (text[i] === "") {
      text[i] === "%20";
    }
  }
};*/
//ALL MY OTHER ATTEMPTS JUST IN CASE
/*const urlEncode = function(text) {
  var newWord = "";
  for (var i = 0; i < text.length; i++) {
    if (text[i] === " " && i !== 0 || text[i] === " " && i !== text.length) {
      newWord = newWord + "%20";
    } else {
      newWord += text[i];
    }
  }
  return newWord;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/
/*text = "orange";
var test = ""
test = test + text[1].replace("t");
console.log(test);*/

/*const urlEncode = function(text) {
  var count = 0;
  var newWord = ""
  for (var i = 0; i < text.length-1; i++) {
    if (text[i] === " ") {
      newWord = newWord + "%20";
    } else {
      newWord += text[i];
    }
  }
  return newWord;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/

//var text = " orange";
//text = text.replace(" ", );
//console.log(text);

/*text = " Lighthouse Labs "
console.log(text)
console.log(text.length)
Word = text.trim()
console.log(Word)
console.log(Word.length)*/

//GOOD ONE
/*const urlEncode = function(text) {
  var newWord = text.trim();
  var encoded = "";
  for (var i = 0; i < newWord.length; i++) {
    if (newWord[i] === " ") {
      encoded += "%20";
    } else {
      encoded += newWord[i];
    }
  }
  return encoded;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/