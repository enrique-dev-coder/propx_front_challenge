import React from "react";
import { archivo } from "@/fonts";
const Navbar = () => {
  return (
    <div className="w-full  py-2 shadow-md mb-4 bg-slate-100">
      <div className="max-w-[1400px] mx-auto w-[80%] flex justify-between">
        <div className={`${archivo.className}  text-4xl`}>PropX</div>
        <div className=" w-10 h-10 rounded-full  bg-purple-500"></div>
      </div>
    </div>
  );
};

export default Navbar;
