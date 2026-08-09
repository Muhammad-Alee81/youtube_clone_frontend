import { Menu } from "lucide-react";
import React from "react";

const SidebarHamburger = () => {
  return (
    <div className="flex justify-center items-center rounded-full h-10 w-10 max-sm:h-7 max-sm:w-7 hover:bg-gray-500/25 cursor-pointer ">
      <Menu className="text-white h-6 w-6 max-sm:h-5 max-sm:w-5" />
    </div>
  );
};

export default SidebarHamburger;
