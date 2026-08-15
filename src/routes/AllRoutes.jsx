import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/index";
import MainLayout from "@/components/layout/Main/MainLayout";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
