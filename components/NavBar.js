"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../public/images/the punk logo png white.png";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="absolute 2xl:right-20 xl:right-16 lg:right-16 md:right-8 sm:right-4 right-4 top-0 text-md"
      >
        {darkMode ? (
          <div className="flex items-center">
            <FaSun /> <p className="m-2">Light Mode</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaMoon /> <p className="m-2">Dark Mode</p>
          </div>
        )}
      </button>
      <section id="top-section">
        <Image
          className="2xl:w-1/12 xl:w-[9rem] lg:w-1/12 md:w-1/6 sm:w-1/6 w-1/5 absolute lg:left-16 md:left-16 sm:left-8 left-8 2xl:top-0 xl:top-0 lg:top-0 md:top-0 sm:top-6 top-6 mr-20 logo-bounce"
          src={Logo}
          alt="Logo"
        />
        <p className="absolute z-10 top-8 2xl:left-52 xl:left-48 lg:left-44 md:left-44 sm:left-36 left-28 text-[#ff3d3e] 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl text-xl font-bold uppercase font-oswald">
          The Punk Fashion Studio
        </p>
        <p className="absolute 2xl:top-24 xl:top-24 md:top-20 sm:top-20 top-16 2xl:left-52 xl:left-48 lg:left-44 md:left-44 sm:left-36 left-28 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-md text-sm">
          We're PUNKS...
        </p>
      </section>
      <section
        className="relative 2xl:top-36 xl:top-36 lg:top-36 md:top-36 sm:top-36 top-28 z-20"
        id="nav-section"
      >
        <hr className="m-auto w-11/12 mb-4" />
        <nav className={`h-20 w-full bg-black bg-opacity-40 ${navbar ? '' : 'flex 2xl:justify-center 2xl:justify-center xl:justify-center lg:justify-center md:justify-center justify-start'}`}>
          <div className={`justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8`}>
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
                  <li className={`relative group text-white font-bold uppercase font-oswald ${navbar ? 'p-1 text-md' : 'p-8 text-xl'}`}>
                  <Link
                    href="/"
                    className="transition ease-in-out duration-500"
                  >
                    Home
                  </Link>
                  {!navbar && <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>}
                </li>
                <li className={`relative group text-white font-bold uppercase font-oswald ${navbar ? 'p-1 text-md' : 'p-8 text-xl'}`}>
                  <Link
                    href="/#services"
                    className="transition ease-in-out duration-500"
                  >
                    Services
                  </Link>
                  {!navbar && <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>}
                </li>
                <li className={`relative group text-white font-bold uppercase font-oswald ${navbar ? 'p-1 text-md' : 'p-8 text-xl'}`}>
                  <Link
                    href="/#about-us"
                    className="transition ease-in-out duration-500"
                  >
                    About
                  </Link>
                  {!navbar && <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>}
                </li>
                <li className={`relative group text-white font-bold uppercase font-oswald ${navbar ? 'p-1 text-md' : 'p-8 text-xl'}`}>
                  <Link
                    href="/#services"
                    className="transition ease-in-out duration-500"
                  >
                    Gallery
                  </Link>
                  {!navbar && <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>}
                </li>
                <li className={`relative group text-white font-bold uppercase font-oswald ${navbar ? 'p-1 text-md' : 'p-8 text-xl'}`}>
                  <Link
                    href="#contact-us"
                    className="transition ease-in-out duration-500"
                  >
                    Contact
                  </Link>
                  {!navbar && <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>}
                </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
