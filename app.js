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

//combined - show a log that is more comprehensive, dev will show simpler information

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.get("/admin", (req, res, next) => {
    res.send("This route points to the admin console page")
} )

app.get("/author", (req, res, next) => {
    res.send("This route points to the author page")
} )

app.get("/books", (req, res, next) => {
    res.send("This route points to the books page")
} )

app.get("/site-routes", (req, res, next) => {
    res.send("This route points to the site router page")
} )