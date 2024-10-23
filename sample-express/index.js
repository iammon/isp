const express = require('express');  // Import Express.js
const server = express();            // Create a new Express app
const port = 3000;                   // Define the port the server will listen on

server.get('/hello', (req, res) => {
    res.send('Hello World!');        // Send "Hello World!" when a GET request is made to /hello
});

server.listen(port, () => {
    console.log(`Listening on port ${port}`);  // Log that the server is running
});

// http://localhost:3000 /hello
