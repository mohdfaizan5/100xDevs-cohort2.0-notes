// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function rewrite() {
  fs.readFile("a.txt", "utf8", (err, data) => {
    console.log(data);
    if (err) throw err;
    else {
      const content = data.replace(/\s+/g, " ").trim();
      console.log(content);
      fs.writeFile("a.txt", content, (err) => {
        if (err) throw err;
        else {
          console.log("completed");
        }
      });
    }
  });
}


rewrite();