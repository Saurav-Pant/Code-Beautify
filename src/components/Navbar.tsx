"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const justifyClasses =
    pathname === "/" ? "justify-around" : "justify-between";
  const btn = pathname;

  return (
    <div className={`flex ${justifyClasses} items-center p-4 fixed w-full`}>
      <div className="text-white">
        <Link href="/" className="text-2xl font-bold">
          <h3
            style={{
              background: "linear-gradient(45deg, #FFA07A, #66CDAA)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            CodeBeautify
          </h3>
        </Link>
      </div>

      {btn === "/CodeBeautify" ? (
        <div></div>
      ) : (
        <div>
          <Link href="/CodeBeautify">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray">
              Beautify Code
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
