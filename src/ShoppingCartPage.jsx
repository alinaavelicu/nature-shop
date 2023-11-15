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
      <div className="bg-[#F4FFF6] flex ">
        <div className="w-1/2 p-4 max-w-md mt-4 ml-[20px]">
          <CartList />
        </div>
        <div className="w-1/2 ml-[200px]">
          <Form />
        </div>
      </div>

      <Footer />
    </>
  );
}
