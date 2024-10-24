// app/layout.tsx

import "./globals.css"; // Import global CSS for styling across all pages

export const metadata = {
  title: "Next.js Example",  // Title of the web application
  description: "Example Application with Next.js 13 features", // Meta description for SEO
};

// Root layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* children represents the content of each page */}
        {children}
      </body>
    </html>
  );
}
