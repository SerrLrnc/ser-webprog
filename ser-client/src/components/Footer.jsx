import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 mt-auto border-t-4 border-maroon-700">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-maroon-600 to-maroon-800">
                                <span className="text-xl font-bold text-white">Y</span>
                            </div>
                            <div>
                                <span className="text-lg font-bold tracking-tight text-white">Yoyetz</span>
                                <span className="text-[10px] font-medium tracking-wider text-maroon-400 block -mt-0.5">STUDIO</span>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-300 max-w-md">
                            Building clean, responsive, and user-friendly web applications with modern React and Tailwind CSS.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-maroon-400">Quick Links</h3>
                        <ul className="mt-4 space-y-2">
                            <li><NavLink to="/" className="text-sm text-gray-300 hover:text-maroon-400 transition">Home</NavLink></li>
                            <li><NavLink to="/about" className="text-sm text-gray-300 hover:text-maroon-400 transition">About</NavLink></li>
                            <li><NavLink to="/articles" className="text-sm text-gray-300 hover:text-maroon-400 transition">Articles</NavLink></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-maroon-400">Resources</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="text-sm text-gray-300 hover:text-maroon-400 transition">React Docs</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-maroon-400 transition">Tailwind CSS</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-maroon-400 transition">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                    <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Yoyetz Studio. All rights reserved.</p>
                    <p className="text-xs text-gray-500 mt-1">Built with React, Tailwind CSS, and ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;