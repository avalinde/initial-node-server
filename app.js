//initialize express environment
//allow the app to use the express package
const express = require("express");

//initialize and retain an index route to automatically render a message when the server starts
const app = express();

//define a port number for the server to listen for a connection.
const PORT = 3000;

//have the app listen at the PORT where a console.log says `Server is listening on ${PORT}. Connection established.`
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

app.get("/", (request, response, next) => {
  response.send("Hello World!");
});
