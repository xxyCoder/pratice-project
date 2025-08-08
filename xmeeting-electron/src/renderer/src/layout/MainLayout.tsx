import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return <div className="pt-10">
    <Outlet />
  </div>
}

export default MainLayout