import React from "react";
import { HomePage } from "./HomePage";
import { ProductsPage } from "./ProductsPage";
import { ShoppingCartPage } from "./ShoppingCartPage";
import { Contact } from "./Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/produse",
    element: <ProductsPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
