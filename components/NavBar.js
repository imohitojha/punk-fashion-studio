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
      <button onClick={toggleDarkMode} className="absolute right-16 text-sm">
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
          className="w-1/12 absolute left-16 top-0 mr-20 logo-bounce"
          src={Logo}
          alt="Logo"
        />
        <p className="absolute z-10 top-8 left-44 text-[#ff3d3e] text-5xl font-bold uppercase font-oswald">
          The Punk Fashion Studio
        </p>
        <p className="absolute top-[85px] left-44">We're PUNKS...</p>
      </section>
      <section className="relative top-40 z-20" id="nav-section">
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
              <Link href="/" className="transition ease-in-out duration-500">
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
                href="/#gallery"
                className="transition ease-in-out duration-500"
              >
                Gallery
              </Link>
              <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
            </li>
            <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
              <Link
                href="/#contact-us"
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
