"use client";
import React from "react";
import Clock from "react-live-clock";
export default function Stats() {
  return (
    <div className="stat place-items-center text-amber-200">
      <div className="stat-title text-amber-200">Current Local time</div>
      <div className="stat-value">
        <Clock format={"h:mm:ss"} ticking={true} />
      </div>
    </div>
  );
}
