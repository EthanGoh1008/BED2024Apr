import express from "express";
const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});

app.put("/user", (req, res) => {
  res.send("Got a PUT request at /user");
});

app.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
// b. Serving static files in Express
// Has to run on Practical02 folder

app.use(express.static("public"));

app.use("/images", express.static("images"));

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
});
