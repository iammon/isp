// app/components/weather/error.tsx

"use client"; // Error boundaries must be client components

// Error boundary component for the weather page
export default function WeatherError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      {/* Button to reset and try rendering the component again */}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
