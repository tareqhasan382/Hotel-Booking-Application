import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import Hotels from "../components/Hotels";
import Rooms from "../components/Rooms";

import MyOrders from "../components/MyOrders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/hotels",
        element: <Hotels />,
      },
      {
        path: "/rooms/:id",
        element: <Rooms />,
      },

      {
        path: "/orders",
        element: <MyOrders />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;
