import React from "react";
import { Logo } from "./Logo";
export { Footer };

function Footer() {
  return (
    <>
      <div className="bg-[#1F7E45] h-1"></div>
      <div className="bg-[#86B490] flex flex-col items-center">
        <div className="w-40 h-20 mb-4">
          <img
            src="/Logo2.png"
            alt="Your Image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-white text-center mt-2">
          <p>Copyright @ 2023 Nature Shop, Inc.</p>
        </div>
        <div className="flex mt-2">
          <button className="text-white underline hover:text-[#0F4826] focus:outline-none">
            Legal Stuff
          </button>
          <span className="mx-2 text-[#0F4826]">|</span>
          <button className="text-white underline hover:text-[#0F4826] focus:outline-none">
            Privacy Policy
          </button>
          <span className="mx-2 text-[#0F4826]">|</span>
          <button className="text-white underline hover:text-[#0F4826]  focus:outline-none">
            Security
          </button>
        </div>
      </div>
      <div className="bg-[#1F7E45] h-1"></div>
    </>
  );
}
