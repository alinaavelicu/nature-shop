import { AddToCartButton } from "./AddToCartButton";
function ProductCard(props) {
  const {
    id,
    imageSrc = "url_default",
    productName = "Nume Produs",
    productDescription = "Descriere Produs",
    productPrice = "Preț Produs",
  } = props;

  return (
    <div className="flex flex-col justify-between w-80 p-3 bg-white rounded-lg border-2 border-[#D6E8DA]">
      <div className="img-container p-8 bg-gray-100 rounded-lg">
        <img src={imageSrc} alt="img_product" />
      </div>
      <div className="product-info mt-2">
        <h5 className="text-xl font-semibold">{productName}</h5>
        <p className="mt-2 text-slate-400">{productDescription}</p>
      </div>
      <div className="flex items-center justify-between">
        <h6 className="font-bold text-2xl">{productPrice} RON</h6>
        <AddToCartButton id={id} />
      </div>
    </div>
  );
}

export { ProductCard };
