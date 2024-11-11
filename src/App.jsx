import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import AppLayout from "./layouts/AppLayout";
import Market from "./pages/Market"
import StickyScrollComponent from "./components/StickyScrollComponent";

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
          element: <StickyScrollComponent />
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
