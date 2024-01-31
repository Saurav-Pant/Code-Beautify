import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0F2027] via-[#203A43] to-[#2C5364] min-h-screen w-full">
      <div className="flex flex-col items-center justify-center h-[100vh] text-white">
        <div className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-center">
          <span
            className="bg-gradient-to-tl from-slate-200 via-gray-400 to-white text-transparent bg-clip-text"
            style={{ WebkitBackgroundClip: "text" }}
          >
            Elevate Your Code Aesthetics with{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #FFA07A, #66CDAA)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {" "}
              CodeBeautify
            </span>
          </span>
        </div>
        <div
          className={`text-base lg:text-xl text-center pt-4 md:mx-40 mx-4`}
        >
          Simplify, organize, and enhance your code effortlessly. CodeBeautify
          is your go-to tool for achieving clean, readable, and beautiful code.
          Elevate your coding experience today!
        </div>
      </div>
    </div>
  );
};

export default Page;
