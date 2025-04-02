"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { 
  FaHome, FaCode, FaEnvelope
} from "react-icons/fa";

import Image from "next/image";
import logoGif from "../../../public/images/k.gif"; // Adjust the path as necessary

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname || "/");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
      `}</style>

      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm py-3 shadow-md" : "bg-white py-4"}`}>
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-center">
            <ul className="flex items-center gap-6 sm:gap-10 font-['Raleway']">
              {/* Logo - Centered with other nav items */}
              <div className="w-10 h-10 relative">
                    <Image
                      src={logoGif}
                      alt="Khalid Khan Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                      unoptimized // Required for GIFs in Next.js
                    />
                  </div>
              
              {/* Navigation Links */}
              {[
                { path: "/", name: "Home", icon: <FaHome className="text-lg" /> },
                { path: "/projects", name: "Projects", icon: <FaCode className="text-lg" /> },
                { path: "/contact", name: "Contact", icon: <FaEnvelope className="text-lg" /> }
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    className={`flex items-center gap-2 text-lg transition-all ${activeLink === item.path ? "text-blue-600 font-medium" : "text-gray-700 hover:text-blue-500 font-normal"}`}
                    onClick={handleLinkClick}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;