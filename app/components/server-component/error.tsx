// app/components/server-component/error.tsx

"use client"; // Error boundaries must be client-side components

// Error boundary for the server component
export default function ServerComponentError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h2>Error: {error.message}</h2>
      {/* Button to reset and try again */}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
