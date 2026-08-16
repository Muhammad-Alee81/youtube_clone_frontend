import React from "react";
import Navbar from "./Navbar/Navbar";
import AppSidebar from "./Sidebar/AppSidebar";
import {
  SidebarContent,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const watchPage = location.pathname.startsWith("/watch/");

  return (
    <>
      <SidebarProvider className="flex flex-col" defaultOpen={!watchPage}>
        <Navbar />

        <div className={`${watchPage ? "" : "flex"}`}>
          <AppSidebar />

          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;
