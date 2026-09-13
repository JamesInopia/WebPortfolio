"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { useAnimatedNav } from "./navRouter";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const navigate = useAnimatedNav();
  const currentYear = new Date().getFullYear();

  return (
    <header className="flex flex-col gap-2 p-6 basis-[15%] h-screen sticky top-0 self-start">
      <div className="flex flex-col justify-between items-center w-full h-full">
        <div className="flex flex-col p-4 gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                }}
                className="relative w-fit px-1 py-1 group"
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 w-full bg-current origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col">
          <Link href="https://github.com/JamesInopia" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-300 hover:bg-white group">
              <FaGithub size={20} className="transition-colors duration-300 group-hover:text-black" />
          </Link>
        </div>
        <div className="flex flex-col text-sm">
          &copy; {currentYear} James Angelo Inopia
        </div>
      </div>
    </header>
  );
}