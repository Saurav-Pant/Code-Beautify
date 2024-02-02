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
    <div className="bg-gradient-radial from-[#16202a] to-[#394450] min-h-screen w-full">
      <div className="flex flex-col items-center justify-center h-[100vh] text-white lg:mx-32">
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
          className={`text-base lg:text-xl text-center pt-4 md:mx-40 mx-4 text-gray-500`}
        >
          Simplify, Create, and enhance your code effortlessly. CodeBeautify
          is your go-to tool for Sharing Clean, readable, and beautiful code.
          {/* <span className="hidden md:block">Elevate your coding experience today!</span> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
