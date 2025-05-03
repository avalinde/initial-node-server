//initialize express environment
//allow the app to use the express package
const express = require("express");

//initialize and retain an index route to automatically render a message when the server starts
const app = express();

//Middleware

//cors
const cors = require("cors");
//morgan
const morgan = require("morgan");

//end Middleware

//define a port number for the server to listen for a connection.
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));

//add the path module
const path = require("node:path");

app.use(express.static(path.join(__dirname + "/public")));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//combined - show a log that is more comprehensive, dev will show simpler information

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/", (req, res, next) => {
  // res.send("Hello World!");
  res.status(200).json({
    success: { message: "This route points to the index page" },
    statusCode: 200,
  });
});

app.get("/admin", (req, res, next) => {
  // res.send("This route points to the admin console page")
  res.status(200).json({
    success: { message: "This route points to the admin page" },
    statusCode: 200,
  });
});

app.get("/authors", (req, res, next) => {
  //  res.send("This route points to the author page")
  res.status(200).json({
    success: { message: "This route points to the author page" },
    statusCode: 200,
  });
});

app.get("/books", (req, res, next) => {
  // res.send("This route points to the books page")
  res.status(200).json({
    success: { message: "This route points to the books page" },
    statusCode: 200,
  });
});

app.get("/site-routes", (req, res, next) => {
  //res.send("This route points to the site router page")
  res.status(200).json({
    success: { message: "This route points to the site router page" },
    statusCode: 200,
  });
});

app.get("/books/create", (req, res, next) => {
  res.status(200).json({
    success: { message: "This route points to the Create Book page" },
    statusCode: 200,
  });
});

app.get("/books/:_id", (req, res, next) => {
  res.status(200).json({
    success: { message: "This route points to the specific Book via the ID" },
    statusCode: 200,
  });
});

app.get("/authors/create", (req, res, next) => {
  res.status(200).json({
    success: { message: "This route points to the Create Author page" },
    statusCode: 200,
  });
});

app.get("/authors/:_id", (req, res, next) => {
  res.status(200).json({
    success: { message: "This route points to the specific author via the ID" },
    statusCode: 200,
  });
});
