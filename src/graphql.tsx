// import React from 'react';
// import { Amplify } from 'aws-amplify';
// import { generateClient } from 'aws-amplify/api';
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
// import awsconfig from './aws-exports';

// // Configure Amplify
// Amplify.configure(awsconfig);

// // Generate API client
// const client = generateClient();

// // Create a GraphQL query
// const LIST_TODOS = `
//   query ListTodos {
//     listTodos {
//       items {
//         id
//         name
//         description
//       }
//     }
//   }
// `;

// // Create a QueryClient
// const queryClient = new QueryClient();

// // Custom hook to fetch todos
// function useTodos() {
//   return useQuery({
//     queryKey: ['todos'],
//     queryFn: async () => {
//       const response = await client.graphql({ query: LIST_TODOS });
//       return response.data.listTodos.items;
//     },
//   });
// }

// // TodoList component
// function TodoList() {
//   const { data: todos, isLoading, isError } = useTodos();

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching todos</div>;

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}><h3>{todo.name}</h3><p>{todo.description}</p></li>
//       ))}
//     </ul>
//   );
// }

// // App component
function GraphqlApp() {
  return (
    // <QueryClientProvider client={queryClient}><div className="App"><h1>My Todo List</h1><TodoList /></div></QueryClientProvider>
    <h1>Graphql App</h1>
  );
}

export default GraphqlApp;