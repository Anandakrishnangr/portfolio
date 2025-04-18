'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavLinks } from '@/llib/navlinks';
import NavLink from './navlink';
import ThemeToggle from '../form/button/themeButton';

const NavBar = () => {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
    setMobileOpen(false); // Close on route change
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background dark:bg-bg-background-dark shadow-md">
      <nav className="flex justify-between items-center px-4 h-14">
        {/* Mobile & Tablet: hamburger left, name right */}
        <div className="flex w-full justify-between items-center xl:hidden">
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold">Ananda Krishnan GR</h1>
        </div>

        {/* Desktop */}
        <div className="hidden xl:flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">Ananda Krishnan GR</h1>
          <ul className="flex items-center gap-4">
            <li>
              <ThemeToggle />
            </li>
            {NavLinks.map((link, i) => (
              <NavLink
                key={`nav-${i}`}
                title={link.title}
                path={link.path}
                currentPath={currentPath}
                setCurrentPath={setCurrentPath}
              />
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav - visible only if mobileOpen */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 py-2' : 'max-h-0'
        } px-4`}
      >
        <ul className="flex flex-col gap-3">
          <li>
            <ThemeToggle />
          </li>
          {NavLinks.map((link, i) => (
            <NavLink
              key={`mobile-nav-${i}`}
              title={link.title}
              path={link.path}
              currentPath={currentPath}
              setCurrentPath={setCurrentPath}
            />
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
