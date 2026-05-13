import { Outlet } from 'react-router-dom';
import redBlackBg from '../assets/images/redBlackBg-small.avif';

const AuthLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image as Background */}
      <div 
        className="relative hidden w-1/2 bg-cover bg-center bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${redBlackBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      
      </div>

      {/* Right Side - Form Content */}
      <div className="flex w-full items-center justify-center bg-gradient-to-br from-red-700 to-black px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;