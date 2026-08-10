import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SideContent from "./SideContent";

const AppSidebar = () => {
  return (
    <>
      <Sidebar className="top-16 border-2 ">
        <SideContent>

        </SideContent>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
