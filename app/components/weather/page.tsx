// app/components/weather/page.tsx

import WeatherComponent from "./component"; // Import the weather component

// This is the main entry point for the weather route
export default function WeatherPage() {
  return (
    <section>
      {/* Render the WeatherComponent and pass "sunny" as the weather prop */}
      <WeatherComponent weather="sunny" />
    </section>
  );
}