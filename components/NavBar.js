"use client";

/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import Logo from "../public/images/the punk logo png white.png";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

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
      <button onClick={toggleDarkMode} className="absolute 2xl:right-20 xl:right-16 lg:right-16 md:right-8 sm:right-4 right-4 top-0 text-md">
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
        <p className="absolute 2xl:top-24 xl:top-24 md:top-20 sm:top-20 top-16 2xl:left-52 xl:left-48 lg:left-44 md:left-44 sm:left-36 left-28 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-md text-sm">We're PUNKS...</p>
      </section>
      <section className="relative 2xl:top-40 xl:top-40 lg:top-40 md:top-36 sm:top-36 top-28 z-20" id="nav-section">
        <hr className="m-auto w-11/12 mb-4" />
        <nav className="flex justify-center items-center w-full h-20">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <ul className="flex items-center">
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link href="/" className="transition ease-in-out duration-500">
                Home
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link href="/#services" className="transition ease-in-out duration-500">
                Services
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link
                href="/#about-us"
                className="transition ease-in-out duration-500"
              >
                About
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link
                href="/#services"
                className="transition ease-in-out duration-500"
              >
                Gallery
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link
                href="#contact-us"
                className="transition ease-in-out duration-500"
              >
                Contact
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
