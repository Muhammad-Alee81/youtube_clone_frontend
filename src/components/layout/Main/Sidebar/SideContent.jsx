import React from "react";

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

import { mainMenu, userMenu } from "./sidebar.data";
import { ChevronRight } from "lucide-react";

const SideContent = () => {
  return (
    <>
      <SidebarContent>
        {/* Main Menu  */}
        <SidebarGroup className="border-b border-b-gray-600">
          {mainMenu.map((el, i) => {
            // const Icon = el.icon;
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

        {/* User Menu */}
        <SidebarGroup className="border-b border-b-gray-600">
          <SidebarGroupLabel className=" text-md flex items-center text-white">
            <span>Subscriptions</span>
            <ChevronRight />
          </SidebarGroupLabel>

          {userMenu.map((el, i) => {
            return (
              <SidebarMenu key={i} className="px1.5">
                <SidebarMenuButton className="text-white rounded-sm cursor-pointer  hover:bg-gray-500/25 hover:text-white active:text-white active:bg-gray-500/25 py-5">
                  <span>
                    <img src={el.icon} alt="profile avatar" className="w-6" />
                  </span>
                  <span>{el.title}</span>
                </SidebarMenuButton>
              </SidebarMenu>
            );
          })}
        </SidebarGroup>

        <SidebarGroup className="border-b border-b-gray-600">
          <SidebarGroupLabel className=" text-md flex items-center text-white">
            <span>You</span>
            <ChevronRight />
          </SidebarGroupLabel>

          {userMenu.map((el, i) => {
            return (
              <SidebarMenu key={i} className="px1.5">
                <SidebarMenuButton className="text-white rounded-sm cursor-pointer  hover:bg-gray-500/25 hover:text-white active:text-white active:bg-gray-500/25 py-5">
                  <span>
                    <img src={el.icon} alt="profile avatar" className="w-6" />
                  </span>
                  <span>{el.title}</span>
                </SidebarMenuButton>
              </SidebarMenu>
            );
          })}
        </SidebarGroup>
      </SidebarContent>
    </>
  );
};

export default SideContent;
