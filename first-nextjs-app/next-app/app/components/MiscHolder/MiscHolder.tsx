import React from "react";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("../stats/Stats"), { ssr: false });

const MiscHolder = () => {
  return (
    <div
      className="p-5 my-5 bg-purple-800 border-amber-400 border-4 rounded-[22px]
    "
    >
      <NoSSR />
    </div>
  );
};
export default MiscHolder;
