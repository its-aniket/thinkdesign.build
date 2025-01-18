"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { navlinks } from "@/constants";


const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuRefs = useRef<(HTMLElement | null)[]>([]);
 

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    const submenuContainer = submenuRefs.current[index];
    
    if (activeSubmenu === index) {
      // Close submenu
      gsap.to(submenuContainer, {
        height: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setActiveSubmenu(null)
      });
    } else {
      // Open submenu
      gsap.set(submenuContainer, { height: "auto" });
      const height = submenuContainer.offsetHeight;
      gsap.set(submenuContainer, { height: 0 });
      gsap.to(submenuContainer, {
        height: height,
        duration: 0.5,
        ease: "power2.inOut"
      });
      setActiveSubmenu(index);
    }
  };

  return (
    <header className=" top-0 left-0 right-0 z-50 bg-transparent shadow-sm md:fixed md:bg-white">
      <nav className="px-4 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              ThinkDesign.Build
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-2" : "translate-y-3"
                }`}
              />
            </div>
          </button>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navlinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.sublinks ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <span>{link.text}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.sublinks.map((sublink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          {sublink.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 py-2 transition-colors ${
                      pathname === link.href
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.text}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-50 transform transition-transform duration-500 ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile menu background */}
          <div
            className="absolute inset-0 bg-black bg-opacity-25"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu content */}
          <div className="absolute right-0 h-full flex flex-col items-start justify-between w-[75%] bg-white shadow-xl overflow-y-auto">
            {/* Top Section */}
            <div className="pt-6 w-full">
              {/* Close Button */}
              <div className="flex justify-end px-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-red-600 focus:outline-none"
                >
                  <span className="sr-only">Close menu</span>✖
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-4">
                {navlinks.map((link, index) => (
                  <div key={index}>
                    {link.sublinks ? (
                      <div>
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="w-full flex items-center justify-between px-6 py-4 text-xl font-medium text-gray-700 hover:bg-gray-50"
                        >
                          <span>{link.text}</span>
                          <ChevronDown
                            className={`w-5 h-5 transform transition-transform duration-300 ${
                              activeSubmenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          ref={(el) => (submenuRefs.current[index] = el)} 
                          className="overflow-hidden"
                          style={{ height: 0 }}
                        >
                          <div className="py-2">
                            {link.sublinks.map((sublink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={sublink.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-10 py-3 text-lg ${
                                  pathname === sublink.href
                                    ? "text-blue-600 bg-gray-50"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                                }`}
                              >
                                {sublink.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-6 py-4 text-xl font-medium ${
                          pathname === link.href
                            ? "text-blue-600 bg-gray-50"
                            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        }`}
                      >
                        {link.text}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full p-4">
              <div className="flex justify-center space-x-4 my-2">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  Instagram
                </a>
              </div>
              <p className="text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} ThinkDesign.Build. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;