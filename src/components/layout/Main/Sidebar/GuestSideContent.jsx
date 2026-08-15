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

import { guestMenu, subscribedChannels, userMenu } from "./sidebar.data";
import { ChevronRight, CircleUserRound } from "lucide-react";
import CustomSignInButton from "@/components/ui/CustomSignInButton";

const GuestSideContent = () => {
  return (
    <>
      <SidebarContent className="min-h-0 custom-scrollbar">
        {/* Main Menu  */}
        <SidebarGroup className="border-b border-b-gray-600">
          {guestMenu.map((el, i) => {
            return (
              <SidebarGroupLabel key={i} className="mb-2 p-0">
                <SidebarMenu>
                  <SidebarMenuButton className="text-white rounded-sm cursor-pointer  hover:bg-gray-500/25 hover:text-white active:text-white active:bg-gray-500/25 py-5 [&_svg]:w-6! [&_svg]:h-6!">
                    <span>{el.icon}</span>
                    <span>{el.title}</span>
                  </SidebarMenuButton>
                </SidebarMenu>
              </SidebarGroupLabel>
            );
          })}
        </SidebarGroup>

        <div className="px-5 py-7 border-b border-gray-600 space-y-4">
          <p className="text-white">
            Sign in to like videos, comment, and subscribe.
          </p>

          <CustomSignInButton />
        </div>
      </SidebarContent>
    </>
  );
};

export default GuestSideContent;
