import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard"
import Students from "./pages/students"
import Courses from "./pages/courses"
import Reports from "./pages/reports"
import Settings from "./pages/settings"

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Home />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: `/students`, element: <Students /> },
        { path: `/courses`, element: <Courses /> },
        { path: `/reports`, element: <Reports /> },
        { path: `/settings`, element: <Settings /> },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App