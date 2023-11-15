import React from "react";
import { Cart } from "./Cart";
import { User } from "./User";
import { Logo } from "./Logo";
import { NavbarButton } from "./NavbarButtons";
import { Link } from "react-router-dom";

export { Navbar };

function Navbar() {
  return (
    <>
      <div className="bg-[#1F7E45]  h-1"></div>
      <nav className="bg-[#86B490] flex justify-around p-4">
        <Logo />
        <div className="flex align-bottom py-4">
          <NavbarButton text="Home" url="/" />
          <NavbarButton text="Products" url="/produse" />
          <NavbarButton text="About Us" />
          <NavbarButton text="Contact" url="/contact" />
        </div>
        <Link to="/cart" className="flex items-center text-[#0F4826]">
          <div>
            <Cart />
          </div>
        </Link>
        <User />
      </nav>
      <div className="bg-[#1F7E45]  h-1"></div>
    </>
  );
}
