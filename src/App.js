import React from "react";
import { createRoot } from "react-dom/client";
import { Home, About, ErrorPage } from "./pages/index.js";
import { Header, Footer } from "./partel/index.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// provide a data according to route like => body

const App = () => (
  <div>
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const routersConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routersConfig} />);
