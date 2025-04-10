'use client';

import Link from "next/link";

interface NavLinkProps {
  title: string;
  path: string;
  currentPath: string;
  setCurrentPath: (path: string) => void;
}

const NavLink = ({ title, path, currentPath, setCurrentPath }: NavLinkProps) => {
  const isActive = currentPath === path;

  const handleClick = () => {
    setCurrentPath(path); // Optimistically update underline
  };

  return (
    <li className="px-4 content-center font-semibold text-xs">
      <Link
        href={path}
        onClick={handleClick}
        className={`relative pb-1 hover:text-blue-300 transition-all ${
          isActive
            ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-400'
            : ''
        }`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
