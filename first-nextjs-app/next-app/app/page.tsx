"use client";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCart/ProductCard";
import { useState } from "react";

export default function Home() {
  const [buttonText, setText] = useState("Hide UI");
  const [UIVisible, setUIVisibility] = useState(true);
  const intialBstate =
    "right-0 btn btn-primary border-amber-400 border-4 text-amber-200 hover:bg-purple-900 hover:border-pink-500 bg-purple-800";
  const [buttonStyle, setBStyle] = useState(intialBstate);
  return (
    <main>
      <button
        onClick={() => {
          if (buttonText === "Hide UI") {
            setUIVisibility(false);
            setText("Show UI");
            setBStyle(
              "right-0 btn btn-primary border-none text-amber-200 backdrop-blur-[1px] bg-purple-800/10 hover:bg-purple-900",
            );
          }
          if (buttonText === "Show UI") {
            setUIVisibility(true);
            setText("Hide UI");
            setBStyle(intialBstate);
          }
        }}
        className={buttonStyle}
      >
        {buttonText}
      </button>
      {UIVisible && (
        <>
          <h1
            className="
      backdrop-blur-[15px]
      bg-purple-500/25
      border-solid border-4 border-amber-400 text-2xl text-amber-400
      p-3 mb-5 ml-1 mr-1 mt-10 rounded-2xl shadow-md shadow-purple-800/50
      "
          >
            Hello Next.js, tailwindcss and daisyUI
          </h1>
          <button
            className="mr-2 my-10 btn btn-primary
      bg-purple-800 border-amber-400 border-4
      text-amber-200
      hover:bg-purple-900 hover:border-pink-500
      "
          >
            <Link href="./users">Go to users page</Link>
          </button>
          <ProductCard />
        </>
      )}
    </main>
  );
}
