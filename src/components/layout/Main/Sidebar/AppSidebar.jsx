import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SideContent from "./SideContent";
import Logo from "../Navbar/components/Logo";
import SidebarHamburger from "../Navbar/components/SidebarHamburger";
import { useState } from "react";
import GuestSideContent from "./GuestSideContent";

const AppSidebar = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <Sidebar className="border-none top-16 h-[calc(100vh-4rem)] ">
        <SidebarHeader className="pt-5 hidden max-sm:block">
          <div className="flex items-center gap-2 max-sm:gap-2 ">
            <SidebarHamburger />
            <Logo />
          </div>
        </SidebarHeader>

        {user ? <SideContent /> : <GuestSideContent />}
      </Sidebar>
    </>
  );
};

export default AppSidebar;
