"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavbarButtons() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="flex flex-row gap-4">
        <AiOutlineMenu className="" />

        <div className="sm:block hidden flex-row">
          <Link
            className="py-2 px-4 text-lg transitions duration-300"
            href="/login"
          >
            Login
          </Link>
        </div>
        <div className="sm:block hidden flex-row">
          <Link
            className="py-2 px-4 text-lg transitions duration-300 rounded-lg border-[2px] border-gray-500 "
            href="/demo"
          >
            Book Demo
          </Link>
        </div>
      </div>
    </>
  );
}
