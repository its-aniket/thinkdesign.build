"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { navlinks } from "@/constants/index";

const Navbar = () => {
  const logoRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navLinksRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Create a timeline for coordinated animations
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Start with elements off-screen
    gsap.set(logoRef.current, { x: -100, opacity: 0 });
    gsap.set(menuButtonRef.current, { x: 100, opacity: 0 });
    gsap.set(navLinksRef.current, { x: 100, opacity: 0 });

    // Animate elements to their final positions
    tl.to(logoRef.current, {
      x: 0,
      opacity: 1,
    })
    .to([menuButtonRef.current, navLinksRef.current], {
      x: 0,
      opacity: 1,
    }, "<0.2"); // Start slightly after logo animation begins

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Animate menu items when opening/closing on mobile
    if (!isMenuOpen) {
      gsap.to(navLinksRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(navLinksRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    gsap.to(navLinksRef.current, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    });
  };

  return (
    <nav className="p-4 w-full bg-transparent flex items-center justify-between relative">
      {/* Logo Section */}
      <div 
        ref={logoRef} 
        className="text-xl font-bold"
      >
        ThinkDesign.Build
      </div>

      {/* Mobile Menu Toggle */}
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="lg:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Navigation Links */}
      <div
        ref={navLinksRef}
        className={`
          lg:flex lg:gap-4 lg:items-center lg:opacity-100 lg:h-auto
          ${isMenuOpen ? "block" : "hidden"}
          absolute z-10 top-16 left-0 w-full bg-white shadow-md 
          lg:static lg:w-auto lg:shadow-none
        `}
      >
        {navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block px-4 py-2 text-gray-700 hover:text-blue-500 lg:px-2"
            onClick={closeMenu}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;