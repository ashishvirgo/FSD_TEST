import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./src/pages/searchpage";
import Login from "./src/pages/login";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const parent=document.getElementById("parent");
const root=ReactDOM.createRoot(parent);

const router=createBrowserRouter([
{
  path: "/home",
  element: <Homepage />
},
{
  path: "/search",
  element: <h1>Search Page</h1>
},
{
    path: "/login",
    element: <Login />
  }

]);
const App=()=>{
    return (
      <RouterProvider router={router} />
    );
};
root.render(<App />);
