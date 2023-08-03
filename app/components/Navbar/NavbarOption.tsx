"use client";
export default function NavbarOption() {
  return (
    <>
      <div className="self-center flex-row gap-4 items-center hidden md:block">
        <a
          href=""
          className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
        >
          Home
        </a>
        <a
          href=""
          className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
        >
          Features
        </a>
        <a
          href=""
          className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
        >
          Pricing
        </a>
        <a
          href=""
          className="py-2 px-4 text-gray-900 font-semibold text-xl transition duration-300"
        >
          Contact
        </a>
      </div>
    </>
  );
}
