// app/components/server-component/page.tsx

import ServerComponentUserList from "./component"; // Import the server component

// Main entry point for the server component route
export default async function ServerComponentUserListPage() {
  return (
    <section>
      {/* Render the server-side component to fetch and display user data */}
      <ServerComponentUserList />
    </section>
  );
}
