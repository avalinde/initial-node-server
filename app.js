//initialize express environment
//allow the app to use the express package
const express = require("express");
// import helmet from "helmet";

//initialize and retain an index route to automatically render a message when the server starts
const app = express();

//Middleware

//cors
const cors = require("cors");
//morgan
const morgan = require("morgan");

//helmet
const helmet = require("helmet");

//end Middleware

//define a port number for the server to listen for a connection.
const PORT = 3000;

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

//add the path module
const path = require("node:path");

const bookRoutes = require("./routes/booksRouter");
const authorRoutes = require("./routes/authorsRouter");

const siteData = require("./data/siteInventory");

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//combined - show a log that is more comprehensive, dev will show simpler information

// Array containing 3 objects, each object representing information about a specific book. This is a representation of information that would actually be stored in a database. Since we're not to databases yet, we'll use this array instead.

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`

app.get("/", (req, res, next) => {
  res.status(200).json({
    success: { message: "This route points to the index page" },
    data: siteData,
    statusCode: 200,
  });
});

// app.get("/admin", (req, res, next) => {
//   // res.send("This route points to the admin console page")
//   res.status(200).json({
//     success: { message: "This route points to the admin page" },
//     data: {
//       isSignedIn: isSignedIn,
//     },
//     statusCode: 200,
//   });
// });

//author pages

//book pages

//site router

app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
