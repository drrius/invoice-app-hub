import React from "react";
import Invoices from "./Invoices";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex h-full w-full flex-row bg-[#F8F8FB]">
      <Navbar />
      <Invoices />
    </div>
  );
};

export default Main;
