import { Search } from "lucide-react";
import SidebarHamburger from "./components/SidebarHamburger";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import Notification from "./components/Notification";
import ProfileAvatar from "./components/ProfileAvatar";

const Navbar = () => {
  return (
    <>
      <main className=" px-7 max-sm:px-2  max-md:px-2 max-lg:px-4 sticky top-0 bg-black">
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

export default Navbar;
