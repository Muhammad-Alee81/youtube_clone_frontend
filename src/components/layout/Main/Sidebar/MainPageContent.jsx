import { useSidebar } from "@/components/ui/sidebar";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const MainPageContent = () => {
  const { open } = useSidebar();
  const location = useLocation();
  const watchPage = location.pathname.startsWith("/watch/");
  return (
    <>
      {watchPage && open && (
        <div className="bg-black/50 absolute top-0 h-full w-full z-5"></div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      ;
    </>
  );
};

export default MainPageContent;
