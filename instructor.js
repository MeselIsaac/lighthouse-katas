const instructorWithLongestName = function(instructors) {
  var count = 0
  var longestName = ""
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestName.length) {
      count = i;
      longestName = instructors[i].name;
    }
  }
  return instructors[count];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
