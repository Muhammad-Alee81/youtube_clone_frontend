import React from "react";
import SidebarHamburger from "./Navbar/SidebarHamburger";
import Logo from "./Navbar/Logo";
import Searchbar from "./Navbar/Searchbar";
import Notification from "./Navbar/Notification";
import ProfileAvatar from "./Navbar/ProfileAvatar";
import { Search } from "lucide-react";

const MainLayout = () => {
  return (
    <>
      <main className="max-w-490 m-auto px-7 max-sm:px-2  max-md:px-2 max-lg:px-4 ">
        <div className="flex h-16 w-full items-center justify-between max-sm:h-12 ">
          {/* Left */}
          <div className="flex items-center gap-2 max-sm:gap-2 max-md:gap-1">
            <SidebarHamburger />
            <Logo />
          </div>

          {/* Center */}
          <Searchbar />

          {/* Right */}
          <div className="flex items-center gap-3 max-sm:gap-0 max-md:gap-1.5">
            <div className="hidden max-sm:block ">
              <Search className="h-5 w-5 text-white max-sm:h-5 max-sm:w-5 " />
            </div>
            <Notification />
            <ProfileAvatar />
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
