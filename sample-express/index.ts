import { routeHello, routeAPINames, routeWeather } from "./routes.js";  // Import the functions routeHello and routeAPINames from routes.js
import express, { Request, Response } from "express";  // Import the Express.js framework and its types
import path from "path";  // Import Node.js's path module to work with file paths

const server = express();            // Create a new Express app
const port = 3000;                   // Define the port the server will listen on

// Define the "/hello" route
server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();  // Get the response from routeHello
  res.send(response);             // Send the response to the client
});

// Define the asynchronous "/api/names" route
server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
  let response: string;   // Declare the response as a string
  try {
    response = await routeAPINames();  // Call the asynchronous routeAPINames function
    res.send(response);                // Send the response
  } catch (err) {
    console.log(err);  // Log any errors that occur
  }
});

// Define the "/api/weather/:zipcode" route
server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
  const response = routeWeather({ zipcode: req.params.zipcode });  // Pass the zip code to the routeWeather function
  res.send(response);  // Send the weather data as the response
});

// Add a new route to serve the weather.html file
server.get("/components/weather", function (req: Request, res: Response): void {
  // Construct the file path for the weather.html file
  const filePath = path.join(process.cwd(), "public", "weather.html");
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");
  // Send the weather.html file to the browser
  res.sendFile(filePath);
});

// Start the server and listen on port 3000
server.listen(port, function (): void {
  console.log("Listening on " + port);   // Log that the server is running
});

// http://localhost:3000 /hello
// http://localhost:3000 /api/names
