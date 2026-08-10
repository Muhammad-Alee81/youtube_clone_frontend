import { Menu } from "lucide-react";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

const SidebarHamburger = () => {
  const { toggleSidebar, open } = useSidebar();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-gray-500/25 max-sm:h-7 max-sm:w-7"
    >
      <Menu className="h-6 w-6 text-white max-sm:h-5 max-sm:w-5" />
    </button>
  );
};

export default SidebarHamburger;
