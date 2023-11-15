import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

import "leaflet/dist/leaflet.css";
import "./Contact.css";
export { Contact };

function EmailForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="flex justify-start m-8 ">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your message here"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-[#F4FFF6]">
      <Navbar />
      <div className="m-8">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          At Nature Shop, we're always eager to hear from you. Whether you have
          questions about our services, need assistance with our products, or
          just want to share your feedback, we're here to listen. Our team is
          committed to providing you with the best experience possible and your
          insights are valuable to us. Please feel free to reach out through the
          form below for any inquiries or comments. We look forward to
          connecting with you and addressing your needs promptly and
          efficiently.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 mr-8">
          <div className="flex-1">
            <EmailForm />
          </div>
          <div className="flex-1">
            <div className="h-96">
              <MapContainer
                center={[40.505, -100.09]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.505, -100.09]}>
                  <Popup>I am a pop-up!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
