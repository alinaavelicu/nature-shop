import React from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { all_products } from "../ProductList/ProductList";

function Cell(props) {
  return <td className="border border-black py-2 px-4">{props.children}</td>;
}

function CartList() {
  const [cart, setCart] = useLocalStorage("cart", {});

  function modifyQuantity(id, quantity) {
    const newQuantity = cart[id] + quantity;
    if (newQuantity > 0) {
      const newCart = { ...cart, [id]: newQuantity };
      setCart(newCart);
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  }

  function getTotal() {
    let total = 0;

    for (let key in cart) {
      const product = all_products.find((p) => p.id === parseInt(key));
      total += product.productPrice * cart[key];
    }

    return total;
  }

  const total = getTotal().toFixed(2);

  return (
    <div>
      <table className="text-center">
        <thead>
          <tr>
            <Cell>Nume produs</Cell>
            <Cell>Cantitate</Cell>
            <Cell>Pret</Cell>
            <Cell>Modifica</Cell>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cart).map((id) => {
            const product = all_products.find((p) => p.id === parseInt(id));
            const quantity = cart[id];
            return (
              <tr key={id}>
                <Cell>{product.productName}</Cell>
                <Cell>{quantity}</Cell>
                <Cell>{(product.productPrice * quantity).toFixed(2)} RON</Cell>
                <Cell>
                  <div className="flex justify-around">
                    <button onClick={() => modifyQuantity(id, -1)}>-</button>
                    <button onClick={() => modifyQuantity(id, +1)}>+</button>
                  </div>
                </Cell>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-end">Total: {total} RON</div>
    </div>
  );
}

export { CartList };
