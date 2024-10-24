var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { routeHello, routeAPINames, routeWeather } from "./routes.js"; // Import the functions routeHello and routeAPINames from routes.js
import express from "express"; // Import the Express.js framework and its types
const server = express(); // Create a new Express app
const port = 3000; // Define the port the server will listen on
// Define the "/hello" route
server.get("/hello", function (_req, res) {
    const response = routeHello(); // Get the response from routeHello
    res.send(response); // Send the response to the client
});
// Define the asynchronous "/api/names" route
server.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let response; // Declare the response as a string
        try {
            response = yield routeAPINames(); // Call the asynchronous routeAPINames function
            res.send(response); // Send the response
        }
        catch (err) {
            console.log(err); // Log any errors that occur
        }
    });
});
// Define the "/api/weather/:zipcode" route
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode }); // Pass the zip code to the routeWeather function
    res.send(response); // Send the weather data as the response
});
// Start the server and listen on port 3000
server.listen(port, function () {
    console.log("Listening on " + port); // Log that the server is running
});
// http://localhost:3000 /hello
// http://localhost:3000 /api/names
