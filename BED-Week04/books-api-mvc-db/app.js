const express = require("express");
const booksController = require("./controllers/booksController");
const usersController = require("./controllers/usersController");
const sql = require("mssql");
const dbConfig = require("./dbConfig");
const bodyParser = require("body-parser"); // Import body-parser
const validateUser = require("./middlewares/validateUser");
const validateBook = require("./middlewares/validateBook");

const app = express();
const port = 3000;
const staticMiddleware = express.static("public"); // Path to the public folder

// Include body-parser middleware to handle JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling

app.use(staticMiddleware); // Mount the static middleware

// Routes for GET requests (replace with appropriate routes for update and delete later)
app.get("/books/search", booksController.searchBooks);
app.get("/books", booksController.getAllBooks);
app.post("/books", validateBook, booksController.createBook); // POST for creating books (can handle JSON data)
app.get("/books/:id", booksController.getBookById);
app.put("/books/:id", validateBook, booksController.updateBook); // PUT for updating books
app.delete("/books/:id", booksController.deleteBook); // DELETE for deleting books

app.get("/users/search", usersController.searchUsers);
app.get("/users/with-books", usersController.getUsersWithBooks);
app.get("/users", usersController.getAllUsers); // Get all users
app.post("/users", validateUser, usersController.createUser); // Create user
app.get("/users/:id", usersController.getUserById); // Get user by ID
app.put("/users/:id", validateUser, usersController.updateUser); // Update user
app.delete("/users/:id", usersController.deleteUser); // Delete user

app.listen(port, async () => {
  try {
    // Connect to the database
    await sql.connect(dbConfig);
    console.log("Database connection established successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    // Terminate the application with an error code (optional)
    process.exit(1); // Exit with code 1 indicating an error
  }

  console.log(`Server listening on port ${port}`);
});

// Close the connection pool on SIGINT signal
process.on("SIGINT", async () => {
  console.log("Server is gracefully shutting down");
  // Perform cleanup tasks (e.g., close database connections)
  await sql.close();
  console.log("Database connection closed");
  process.exit(0); // Exit with code 0 indicating successful shutdown
});

app.post("/books", validateBook, booksController.createBook); // POST for creating books (can handle JSON data)
app.put("/books/:id", validateBook, booksController.updateBook);
