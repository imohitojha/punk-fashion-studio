"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";
import HeroImage from "../../public/images/PUNK-hero.png";

export default function Form() {
  return (
    <>
      <NavBar />
      <section id="form-section" className="relative top-40 mb-10">
        <div className="flex flex-col justify-center px-6 py-6 lg:px-8 m-2 rounded-md">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              className="mx-auto h-10 w-auto"
              src={HeroImage}
              alt=""
            />
            <h2 className="mt-6 text-center text-3xl font-oswald leading-9 text-[#ff3d3e]">
              Book Your Appointment
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-4"
              action="https://submit-form.com/R9ED8sqS"
              method="post"
            >
              <div>
                <label
                  for="firstName"
                  className="block text-md font-medium leading-6"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full text-black rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="lastName"
                  className="block text-md font-medium leading-6"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="block w-full text-black rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="contact"
                  className="block text-md font-medium leading-6"
                >
                  Contact number
                </label>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    minLength="10"
                    maxLength="10"
                    required
                    className="block w-full text-black rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  className="block text-md font-medium leading-6"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full text-black rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="category"
                  className="block text-md font-medium leading-6"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    required
                    className="block w-full text-black tracking-wider uppercase font-oswald rounded-md border-0 py-2 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <option value="salon">Salon</option>
                    <option value="tattoo">Tattoo</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#ff3d3e] rounded-full flex w-full justify-center rounded-md px-3 py-1.5 text-md font-semibold leading-6 shadow-sm hover:bg-[#d40f0f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Book now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
