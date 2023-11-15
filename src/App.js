import React from "react";
import { createRoot } from "react-dom/client";
import { Home, About, ErrorPage, RestaurentMenu } from "./pages/index.js";
import { Header, Footer } from "./partel/index.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// outlet provide a data according to route like => body
// basically header is stick the application routes expect error page

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
      {
        path: "/restaurent/:resId", //dynamic router start with : and after : all is dynamic like 1, 2,3 etc
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routersConfig} />);
