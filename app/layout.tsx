// app/layout.tsx (Updated with navigation)

import Link from "next/link"; // Import the Link component from Next.js

// Root layout component that includes a navigation bar
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation bar with links to different routes */}
        <nav>
          <Link href="/components/weather">Weather Component</Link> |{" "}
          <Link href="/components/server-component">Server Component</Link>
        </nav>
        {/* Render the content of the current page */}
        {children}
      </body>
    </html>
  );
}
