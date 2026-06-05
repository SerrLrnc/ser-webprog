import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
    { label: 'Home', to: '/' },
    { label: 'Articles', to: '/articles' },
    { label: 'About', to: '/about' },
];

const navLinkClassName = ({ isActive }) =>
    [
        'rounded-full border-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200',
        isActive
            ? 'border-maroon-700 bg-maroon-700 text-white shadow-md'
            : 'border-transparent text-gray-700 hover:border-maroon-500 hover:bg-maroon-50 hover:text-maroon-600',
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
        localStorage.removeItem('userType');
        localStorage.removeItem('userName');
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/auth/signin');
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-gray-900 border-b-2 border-maroon-700 shadow-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
                {/* Logo */}
                <NavLink to="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-maroon-600 to-maroon-800 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                        <span className="text-xl font-bold text-white">Y</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight text-white">Yoyetz</span>
                        <span className="text-[10px] font-medium tracking-wider text-maroon-400 -mt-0.5">STUDIO</span>
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

                    {isLoggedIn && (
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                                    isActive
                                        ? 'bg-maroon-700 text-white'
                                        : 'text-gray-300 hover:text-maroon-400'
                                }`
                            }
                        >
                            Dashboard
                        </NavLink>
                    )}

                    <div className="mx-2 h-6 w-px bg-gray-700"></div>

                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="rounded-full bg-maroon-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-maroon-800 hover:shadow-md"
                        >
                            Logout
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/auth/signin"
                                className={({ isActive }) =>
                                    `rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                                        isActive
                                            ? 'bg-maroon-700 text-white'
                                            : 'text-gray-300 hover:text-maroon-400'
                                    }`
                                }
                            >
                                Sign In
                            </NavLink>

                            <NavLink
                                to="/auth/signup"
                                className="rounded-full bg-maroon-700 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-200 hover:bg-maroon-800 hover:shadow-md"
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden rounded-lg border border-gray-700 p-2 hover:bg-gray-800 transition">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavBar;