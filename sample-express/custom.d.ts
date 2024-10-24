// Define a type for response items
type responseItemType = {
    id: string;
    name: string;
  };
  
  // Define a type for weather details
  type WeatherDetailType = {
    zipcode: string;
    weather: string;
    temp?: number;   // Optional temperature property
  };
  
  // Define an interface for weather queries (like zip code)
  interface WeatherQueryInterface {
    zipcode: string;
  }
  