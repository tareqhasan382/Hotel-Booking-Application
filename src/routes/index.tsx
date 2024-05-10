import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
// import NotFound from "../screens/NotFound";
// import Login from "../screens/Login";
// import Register from "../screens/Register";
// import Home from "../dashboard/Home";
// import Products from "../dashboard/products/Products";
// import Admin from "../dashboard/Admin";
// import Cart from "../components/Cart";
// import WishList from "../components/WishList";
// import Orders from "../components/Orders";
// import Order from "../dashboard/orders/Orders";
// import Customer from "../dashboard/customers/Customer";
// import Collections from "../dashboard/collections/Collections";
// import NewCollection from "../dashboard/collections/NewCollection";
// import AddProduct from "../dashboard/products/AddProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      //   {
      //     path: "/cart",
      //     element: <Cart />
      //   },
      //   {
      //     path: "/wishlist",
      //     element: <WishList />
      //   },
      //   {
      //     path: "/orders",
      //     element: <Orders />
      //   },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      //   {
      //     path: "/task",
      //     element:<PrivateRoute><TaskManagement/> </PrivateRoute>,
      //   },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // {
  //   path: "/admin",
  //   element: <Home />,
  //   children: [
  //     {
  //       path: "/admin",
  //       element: <Admin />
  //     },
  //     {
  //       path: "/admin/products/new",
  //       element: <AddProduct />,
  //     },
  //     {
  //       path: "/admin/products",
  //       element: <Products />,
  //     },
  //     {
  //       path: "/admin/Collections/new",
  //       element: <NewCollection />,
  //     },
  //     {
  //       path: "/admin/Collections",
  //       element: <Collections />,
  //     },
  //     {
  //       path: "/admin/orders",
  //       element: <Order />,
  //     },
  //     {
  //       path: "/admin/customers",
  //       element: <Customer />,
  //     },

  //   ],
  // },
]);
export default routes;
