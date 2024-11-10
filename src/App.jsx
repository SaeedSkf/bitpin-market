import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Market from "./pages/Market"
function App() {
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

  return <RouterProvider router={router} />
}

export default App
