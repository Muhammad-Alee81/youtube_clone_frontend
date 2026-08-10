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

const AppSidebar = () => {
  return (
    <>
      <Sidebar className="border-none top-16 h-[calc(100vh-4rem)] ">
        <SidebarHeader className="pt-5 hidden max-sm:block">
          <div className="flex items-center gap-2 max-sm:gap-2 ">
            <SidebarHamburger />
            <Logo />
          </div>
        </SidebarHeader>
        <SideContent />
      </Sidebar>
    </>
  );
};

export default AppSidebar;
