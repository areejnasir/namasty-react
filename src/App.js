import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { Home, About, ErrorPage, RestaurentMenu } from "./pages/index.js";
import { Header, Footer } from "./partel/index.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useOnlineStatus } from "./utils/custom-hooks/index.js";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// outlet provide a data according to route like => body
// basically header is stick the application routes expect error page

// lazy is used to chunking the data, its will load when we navigate the grocery componet otherwise not
const Grocery = lazy(() => import("./pages/grocery/Grocery.js"));

const App = () => {
  const onlineStatus = useOnlineStatus();

  return onlineStatus === false ? (
    <h1>You are offline!! PLease check your internet connection...</h1>
  ) : (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={routersConfig} />
  </Provider>
);
