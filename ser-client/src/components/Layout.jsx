import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="pb-16 pt-20">
        <div className="w-full"> {/* Add this wrapper for full width */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;  