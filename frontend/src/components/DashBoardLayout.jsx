import { Outlet, Navigate } from "react-router-dom";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const DashBoardLayout = () => {
  const { userInfo } = useSelector((state) => state.user);
  if (userInfo?.token?.access && userInfo?.user?.is_superuser) {
    return (
      <div className='flex h-screen overflow-hidden'>
        <SideBar />
        <div className='flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>
          <Navbar />
          <main>
            <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    );
  }

  return <Navigate to='/login' />;
};

export default DashBoardLayout;
