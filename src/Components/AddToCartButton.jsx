import React from "react";
import { AddToCartIcon } from "./AddToCartIcon";
import { useLocalStorage } from "@uidotdev/usehooks";

function AddToCartButton(props) {
  const [cart, setCart] = useLocalStorage("cart", {});

  const addToCart = (productId) => {
    const currentQuantity = cart[productId] || 0;
    const newCart = {
      ...cart,
      [productId]: currentQuantity + 1,
    };

    setCart(newCart);
  };

  return (
    <button
      className="flex border-2 border-[#20522B]/50 p-2 rounded-lg bg-[#86B490] text-white font-semibold"
      onClick={() => addToCart(props.id)}
    >
      <AddToCartIcon />
      <span>Add to Cart</span>
    </button>
  );
}

export { AddToCartButton };
