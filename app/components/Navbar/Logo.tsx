"use client";
import { LuBird } from "react-icons/lu";
export default function Logo() {
  return (
    <>
      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <LuBird className="text-4xl text-blue-500" />
        <div className="text-2xl font-bold text-blue-500 hidden md:block">
          Bird
        </div>
      </div>
    </>
  );
}
