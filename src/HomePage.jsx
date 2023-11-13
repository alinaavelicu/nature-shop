import React from "react";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
export { HomePage };

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <img
          alt="Home"
          src="./Mozaic2.png"
          className="object-cover h-fit w-fit"
        ></img>
      </div>
      <Footer />
    </>
  );
}
