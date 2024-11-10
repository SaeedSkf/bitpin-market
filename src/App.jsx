import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import AppLayout from "./layouts/AppLayout";
import Market from "./pages/Market"
function App() {
  const client = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Market />
        },
        {
          path: ":id",
          element: <div>Marke333t</div>
        },
      ]
    },
  ])

  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
