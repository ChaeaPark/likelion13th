import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-black text-white min-h-screen px-10">
        <Outlet />
      </div>
    </>
  );
};
