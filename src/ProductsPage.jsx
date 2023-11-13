import React from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { ProductCard } from "./Components/ProductCard";
import { all_products } from "./ProductList/ProductList";
import { useState, useEffect } from "react";
export { ProductsPage };

function ProductsPage() {
  const [displayedProducts, setDisplayedProducts] = useState(all_products);
  const [searchInput, setSearchInput] = useState(null);

  useEffect(() => filterProducts(), [searchInput]);

  function filterProducts() {
    let filteredList = [];
    if (searchInput != null && searchInput !== "") {
      filteredList = all_products.filter(
        (item) => item.productName.toLowerCase().indexOf(searchInput) !== -1
      );
    } else {
      filteredList = all_products;
    }

    setDisplayedProducts(filteredList);
  }
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <input
          placeholder="Search..."
          type="search"
          id="searchBar"
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-4 py-2 mt-6 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="grid grid-cols-3">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageSrc={product.imageSrc}
            productName={product.productName}
            productDescription={product.productDescription}
            productPrice={product.productPrice}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
