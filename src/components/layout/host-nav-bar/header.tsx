import React from "react";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

const HostNavBar = () => {
  return (
    <div className="w-full border-b">
      <div className="flex h-14 items-center justify-between px-4">
        <div className="text-xl">The Booking App</div>
        <NavDesktop />
        <NavMobile />
      </div>
    </div>
  );
};

export default HostNavBar;
