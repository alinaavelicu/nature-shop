import { useState, useEffect } from "react";

const [displayedProducts, setDisplayedProducts] = useState(allProducts);
const [searchInput, setSearchInput] = useState(null);

useEffect(() => filterProducts(), [searchInput]);

function filterProducts() {
  let filteredList = [];
  if (searchInput != null && searchInput !== "") {
    filteredList = data.filter(
      (item) => item.name.toLowerCase().indexOf(searchInput) !== -1
    );
  } else {
    filteredList = allProducts;
  }

  setDisplayedProducts(filteredList);
}

<input id="searchBar" onChange={(e) => setSearchInput(e.value)} />;

/*

allProducts.map( ... )

DEVINE:

displayedProducts.map( ... )

*/
