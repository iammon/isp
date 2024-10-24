// app/components/weather/component.tsx

"use client"; // Declares this as a client-side component

import { useState, useEffect } from "react";

// This component displays weather info and has an interactive counter
export default function WeatherComponent({ weather }: { weather: string }) {
  // useState hook to manage the counter state
  const [count, setCount] = useState(0);

  // useEffect hook runs once after the component mounts and sets count to 1
  useEffect(() => {
    setCount(1);
  }, []);

  return (
    // Display the weather and count, and increment the counter on click
    <h1 onClick={() => setCount(count + 1)}>
      The weather is {weather}, and the counter shows {count}
    </h1>
  );
}
