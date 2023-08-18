import { Outlet } from "react-router-dom";
import Header from "../static/Header";


const Layout = () => {
  return (
    <div>
      <Header />
      <div className="w-full bg-slate-200 flex h-[calc(100vh-70px)]">
      
        <div className="mt-[70px] p-2">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
