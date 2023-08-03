import React from "react";
import Logo from "./Logo";
import NavbarOption from "./NavbarOption";
import NavbarButtons from "./NavbarButtons";

export default function Navbar() {
  return (
    <>
      <div className="w-full px-10 py-20 flex items-center justify-between md:justify-evenly">
        <Logo />
        <NavbarOption />
        <NavbarButtons />
      </div>
    </>
  );
}
