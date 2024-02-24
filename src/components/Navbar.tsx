"use client";
import React from "react";
import Link from "next/link";
import { useWindowSize } from "react-use";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { width } = useWindowSize();

  const btn = pathname;
  return (
    <div className="flex justify-between items-center p-4 fixed w-full z-10">
      <div className="text-white">
        <Link href="/" className="font-bold text-xs md:text-xl">
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

      {width > 900 ? (
        btn === "/CodeBeautify" ? (
          <div></div>
        ) : (
          <div>
            <Link href="/CodeBeautify">
              <button className="bg-black text-white px-2 py-1 md:px-4 md:py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition-colors duration-300 text-xs md:text-xl">
                Beautify Code
              </button>
            </Link>
          </div>
        )
      ) : (
        <AlertDialog>
          <AlertDialogTrigger className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition-colors duration-300 ">
            Beautify Code
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Sorry For Inconvenience</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be performed. <br />
                Your window size is small. Please use a different device.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="text-red-500">
                Cancel
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </div>
  );
};

export default Navbar;
