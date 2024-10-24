import { routeHello, routeAPINames } from "./routes.js";  // Import the functions routeHello and routeAPINames from routes.js
import express from "express";  // Import the Express.js framework

const server = express();            // Create a new Express app
const port = 3000;                   // Define the port the server will listen on

// Define a GET route for "/hello"
server.get("/hello", function (req, res) {
    const response = routeHello(req, res);  // Call the routeHello function, which returns "Hello World!"
    res.send(response);  // Send the response back to the client (browser)
  });

// Define an asynchronous GET route for "/api/names"
server.get("/api/names", async function (req, res) {
    let response;
    try {
      response = await routeAPINames(req, res);  // Call the routeAPINames function, which fetches data from an API
    } catch (err) {
      console.log(err);  // Log any errors encountered during the API call
    }
    res.send(response);  // Send the API data (names and IDs) back to the client
  });

// Start the server and listen for incoming connections on port 3000
server.listen(port, function () {
    console.log("Listening on " + port);  // Log a message indicating that the server is running and listening on port 3000
  });
// http://localhost:3000 /hello
// http://localhost:3000 /api/names
