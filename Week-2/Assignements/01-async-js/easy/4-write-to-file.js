// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

let data = "This is the content that should be included the b.txt file";

fs.writeFile("text2.txt", data, (err) => {
  if (err) throw err;
});