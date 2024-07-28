"use client";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex h-full w-24 flex-col items-center justify-center rounded-br-[20px] rounded-tr-[20px] bg-[#373B53] pb-6">
      <Image src="/navbar-icon.svg" alt="navbar-icon" width={96} height={96} />
      <div className="flex w-full flex-1 flex-col items-center justify-end gap-12">
        <div className="flex w-full items-center justify-center">
          <DarkModeToggle />
        </div>
        <Image
          src="/image-avatar.jpg"
          alt="user"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
