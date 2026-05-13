import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200',
    isActive
      ? 'border-red-600 bg-red-600 text-white shadow-md'
      : 'border-transparent text-zinc-600 hover:border-red-300 hover:bg-red-50 hover:text-red-700',
  ].join(' ');

const NavBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(!!auth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-700 to-black shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
            <span className="text-xl font-bold text-white">W</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-zinc-900">Wireframe</span>
            <span className="text-[10px] font-medium tracking-wider text-zinc-500 -mt-0.5">STUDIO</span>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-3 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
          
          {/* Divider */}
          <div className="mx-2 h-6 w-px bg-zinc-300"></div>
          
          {isLoggedIn ? (
            /* Show Logout button when logged in */
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-red-700 hover:shadow-md"
            >
              Logout
            </button>
          ) : (
            /* Show Sign In / Sign Up links when not logged in */
            <>
              <NavLink
                to="/auth/signin"
                className={({ isActive }) =>
                  `rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'text-red-600 hover:bg-red-50'
                  }`
                }
              >
                Sign In
              </NavLink>
              
              <NavLink
                to="/auth/signup"
                className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-red-700 hover:shadow-md"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden rounded-lg border border-zinc-200 p-2 hover:bg-zinc-100 transition">
          <svg className="h-5 w-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default NavBar;