import React, { ReactNode } from "react";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1400px] mx-auto w-[80%]">{children}</main>
    </>
  );
};

export default Layout;
