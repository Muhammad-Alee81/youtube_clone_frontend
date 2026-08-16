import React from "react";
import Navbar from "./Navbar/Navbar";
import AppSidebar from "./Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { useLocation } from "react-router-dom";
import MainPageContent from "./Sidebar/MainPageContent";

const MainLayout = () => {
  const location = useLocation();
  const watchPage = location.pathname.startsWith("/watch/");

  return (
    <>
      <SidebarProvider className="flex flex-col" defaultOpen={!watchPage}>
        <Navbar />

        <div className={`${watchPage ? "" : "flex"}`}>
          <AppSidebar />
          <MainPageContent />
        </div>
      </SidebarProvider>
    </>
  );
};

export default MainLayout;
