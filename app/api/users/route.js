export async function GET(req, res, next) { 
  // Handle GET requests for api/users
  // Retrieve users from the database or any other data source

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Eve' },
  ];

  // Send the users as response
  return new Response(JSON.stringify(users));
}