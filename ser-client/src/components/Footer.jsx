import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-700">
                <span className="text-xl font-bold text-white">W</span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-zinc-900">Wireframe</span>
                <span className="text-[10px] font-medium tracking-wider text-zinc-500 block -mt-0.5">STUDIO</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-zinc-600 max-w-md">
              Building clean, responsive, and user-friendly web applications with modern React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/articles" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  Articles
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  React Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  Tailwind CSS
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t-2 border-zinc-200 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Wireframe Studio. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400 mt-1">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;