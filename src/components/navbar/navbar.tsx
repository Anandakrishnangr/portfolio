'use client';

import { NavLinks } from '@/llib/navlinks';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavLink from './navlink';
import ThemeToggle from '../form/button/themeButton';

const NavBar = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        // Ensure currentPath stays in sync on route change
        setCurrentPath(pathname);
    }, [pathname]);

    return (
        <nav className="flex justify-between items-center w-full h-10 px-4 text-white bg-gray-800">
            <div className="logo">
                <h1 className="text-xl font-bold">Ananda Krishnan GR</h1>
            </div>
            <ul className="flex">
                <li className='items-center'>
                    <ThemeToggle />
                </li>
                {NavLinks.map((link, index) => (
                    <NavLink
                        key={index + 'nav'}
                        title={link.title}
                        path={link.path}
                        currentPath={currentPath}
                        setCurrentPath={setCurrentPath}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
