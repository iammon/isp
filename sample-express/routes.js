// Import the fetch function from the 'node-fetch' package to make HTTP requests.
import fetch from "node-fetch";

// Define the routeHello function using an arrow function.
// This function simply returns the string "Hello World!" when called.
const routeHello = () => "Hello World!";

// Define an asynchronous function called routeAPINames using async/await syntax.
// This function makes an API call to get a list of users and returns their names and IDs.
const routeAPINames = async () => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users"; // The API endpoint URL.
  let data; // A variable to store the data fetched from the API.
  try {
    // Make an asynchronous HTTP request to the given URL using the fetch function.
    // Await the response and convert it to JSON format.
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    // If there's an error during the fetch request (e.g., network issue), return the error.
    return err;
  }

  // Use the array 'map' function to extract the 'id' and 'name' fields from each user object in the data array.
  // Format the data as a string: "id: <id>, name: <name>".
  // Then, use 'join' to concatenate each item with an HTML line break "<br>", so they appear on new lines.
  const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");

  // Return the formatted string of names and IDs.
  return names;
};

// Export the two functions so they can be imported and used in other parts of the application.
export { routeHello, routeAPINames };