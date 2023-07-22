import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center w-full h-20">
    {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      <ul className="flex items-center">
        <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
          <a href="#" className="transition ease-in-out duration-500">
            Home
          </a>
          <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
        </li>
        <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
          <a href="#" className="transition ease-in-out duration-500">
            Services
          </a>
          <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
        </li>
        <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
          <a href="#about-us" className="transition ease-in-out duration-500">
            About
          </a>
          <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
        </li>
        <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
          <a href="#gallery" className="transition ease-in-out duration-500">
            Gallery
          </a>
          <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
        </li>
        <li className="relative group text-white text-xl font-bold uppercase font-oswald p-8">
          <a href="#contact-us" className="transition ease-in-out duration-500">
            Contact
          </a>
          <div className="absolute left-0 bottom-0 h-1 w-full bg-[#ff3d3e] transform scale-x-0 group-hover:scale-x-100 transition ease-in-out duration-500"></div>
        </li>
      </ul>
    </nav>
  );
}
