"use client";

import React from "react";
import { auth, googelProvider } from "../../config/firebase";
import Image from "next/image";
const TabBar = () => {
  console.log(auth?.currentUser?.photoURL);
  return (
    <div className="flex justify-between border-8 rounded-xl border-foam-600 h-20 fixed  top-5 left-10 right-10 bottom-10 p-4 bg-foam-300">
      <div>three lines</div>
      <div> </div>
    </div>
  );
};

export default TabBar;
