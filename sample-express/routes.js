var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Import the fetch function from the 'node-fetch' package to make HTTP requests.
import fetch from "node-fetch";
// Define the routeHello function using an arrow function.
// This function simply returns the string "Hello World!" when called.
const routeHello = () => "Hello World!";
// Define an asynchronous function called routeAPINames using async/await syntax.
// This function makes an API call to get a list of users and returns their names and IDs.
// Define an asynchronous route that fetches data from an external API
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users"; // API URL
    let data; // Declare the data type as an array of responseItemType
    try {
        const response = yield fetch(url); // Make the API call
        data = (yield response.json()); // Convert the response to JSON and cast it as an array of responseItemType
    }
    catch (err) {
        return "Error"; // If there’s an error, return a simple error string
    }
    // Map through the data and format it as "id: <id>, name: <name>", then join with line breaks
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names; // Return the formatted string
});
// Define a route that returns weather details based on a zip code query
const routeWeather = (query) => queryWeatherData(query); // Call the function to get weather data
// A function that simulates querying weather data (returns static data here)
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode, // Get the zip code from the query
        weather: "sunny", // Static weather data
        temp: 35 // Static temperature
    };
};
// Export the two functions so they can be imported and used in other parts of the application.
export { routeHello, routeAPINames, routeWeather };
