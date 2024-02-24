import React from "react";
import { Roboto } from "next/font/google";
import Spotlight from "@/components/ui/Spotlight";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-black  bg-grid-white/[0.15] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
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
          Simplify, Create, and enhance your code effortlessly. CodeBeautify is
          your go-to tool for Sharing Clean, readable, and beautiful code.
          {/* <span className="hidden md:block">Elevate your coding experience today!</span> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
