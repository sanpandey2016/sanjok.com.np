"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // List of navigation sections
  const navItems = [
    { id: "home", label: "Home", href: "#" },
    { id: "san-about", label: "About", href: "#san-about" },
    { id: "my-education", label: "Skills", href: "#my-education" },
    { id: "san-portfolio", label: "Portfolio", href: "#san-portfolio" },
    { id: "my-projects", label: "Projects", href: "#my-projects" },
  ];

  // Scroll spy to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header height

      // Check which section is in view
      for (const item of navItems) {
        if (item.id === "home") {
          const heroSection = document.getElementById("particles-js");
          if (heroSection) {
            const top = heroSection.offsetTop;
            const height = heroSection.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection("home");
              continue;
            }
          }
        }

        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <a href="#" className="header__logo">
        SANJOK
      </a>
      <i
        className="fas fa-bars header__toggle"
        id="nav-toggle"
        onClick={toggleMenu}
      ></i>

      <nav className={`nav ${isMenuOpen ? "show" : ""}`} id="nav-menu">
        <div className="nav__content bd-grid">
          <i
            className="fad fa-times nav__close"
            id="nav-close"
            onClick={closeMenu}
          ></i>

          <div className="nav__perfil">
            <div className="nav__img">
              <Image
                src="/images/san.jpeg"
                alt="Sanjok Pandey"
                width={56}
                height={56}
                priority
              />
            </div>
            <div>
              <a href="#" className="nav__name">
                Sanjok
              </a>
              <span className="nav__profesion">Web designer</span>
            </div>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li key={item.id} className="nav__item">
                  <a
                    href={item.href}
                    className={`nav__link ${
                      activeSection === item.id ? "active" : ""
                    }`}
                    onClick={(e) => {
                      closeMenu();
                      if (item.id === "home") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__social">
            <a
              href="#"
              className="nav__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="nav__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com"
              className="nav__social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
