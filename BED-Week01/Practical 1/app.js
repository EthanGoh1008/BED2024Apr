const express = require("express");
const app = express();
const port = 3300;
app.get("/", (req, res) => {
  res.send("Hello World from Express!");
});
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`);
});

//Getting information out of a path
const path = require("node:path");

const notes = "/users/ethan/notes.txt";

path.dirname(notes); // /users/ethan
path.basename(notes); // /notes.txt
path.extname(notes); // /.txt

//Reading files with node.js
const fs = require("node:fs");

fs.readFile(
  "/Users/Admin/Downloads/Back End Development/Week01/Practical1/test.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);

//Writing files with node.js
const fs = require("node:fs");

const content = "Some content!";

fs.writeFile(
  "/Users/Admin/Downloads/Back End Development/Week01/Practical1/test.txt",
  content,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      //file written successfully
    }
  }
);

//Colour the output
const chalk = require("chalk");

console.log(chalk.yellow("hi!"));
