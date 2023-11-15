import { useState } from "react";
export { Form };

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    codPostal: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "deliveryMethod") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "paymentMethod") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
      email: "",
      codPostal: "",
    });
  };
  const handleClear = () => {
    setFormData({
      ullName: "",
      address: "",
      phoneNumber: "",
      email: "",
      codPostal: "",
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-8 border border-black rounded shadow-lg bg-white mb-8">
      <h2 className="text-2xl mb-4 font-medium text-gray-700">
        Completeaza datele pentru livrare
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Nume complet:
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="adress"
            className="block text-sm font-medium text-gray-700"
          >
            Adresa:
          </label>
          <input
            type="text"
            name="address"
            id="adress"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Numar telefon:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="codPostal"
            className="block text-sm font-medium text-gray-700"
          >
            Cod postal:
          </label>
          <input
            type="number"
            name="codPostal"
            id="codPostal"
            value={formData.codPostal}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mt-4 p-4 border rounded shadow-sm block text-sm font-medium text-gray-700 ">
          <p>Alege metoda de livrare:</p>
          <div>
            <input
              type="radio"
              id="courier"
              name="deliveryMethod"
              value="courier"
              checked={formData.deliveryMethod === "courier"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="courier">Curier</label>
          </div>
          <div>
            <input
              type="radio"
              id="post"
              name="deliveryMethod"
              value="post"
              checked={formData.deliveryMethod === "post"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="post" className="mr-2">
              Posta
            </label>
          </div>
        </div>
        <div className="mt-4 p-4 border rounded shadow-lg block text-sm font-medium text-gray-700">
          <p>Select Payment Method:</p>
          <div>
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === "cash"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="cash" className="mr-2">
              Cash
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={formData.paymentMethod === "card"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="card" className="mr-2">
              Card
            </label>
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className={`${
              !formData.paymentMethod
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-700"
            } text-white font-bold py-2 px-4 rounded`}
            disabled={!formData.paymentMethod || !formData.deliveryMethod}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
