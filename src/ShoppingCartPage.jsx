import React from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { CartList } from "./Components/CartList";
import { Form } from "./Components/Form";

export { ShoppingCartPage };

function ShoppingCartPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-8">
        <CartList />
      </div>
      <Form />
      <Footer />
    </>
  );
}
