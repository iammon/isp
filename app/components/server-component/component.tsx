// app/components/server-component/component.tsx

// Server-side component that fetches user data from an API
export default async function ServerComponentUserList() {
    // Fetch data from a placeholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  
    return (
      <ul>
        {/* Map through the fetched data and display user names */}
        {data.map((user: { id: number; name: string }) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
  