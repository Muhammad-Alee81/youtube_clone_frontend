import React from "react";
import Navbar from "./Navbar/Navbar";
import AppSidebar from "./Sidebar/AppSidebar";
import { SidebarContent, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <SidebarProvider className="flex flex-col z-10">
        <Navbar />

        <div className="flex">
          <AppSidebar />

          <main className="flex-1 px-5">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;
